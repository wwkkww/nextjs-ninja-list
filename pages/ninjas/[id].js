import React from "react";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/");
  const data = await res.json();
  const paths = data.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },
    };
  });

  console.log(paths);
  // must return object with 'paths' property with array of object(routes)
  // eg: [{ params: { id: 1}}, {}, {}]
  return {
    paths,
    fallback: false,
  };
};

// if paths from getStaticPaths have array of 10 item
// this getStaticProps function will run 10 times to genetate the page for each item
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: { ninja: data },
  };
};

const Details = ({ ninja }) => {
  // console.log("ninja", ninja);
  return (
    <div>
      {ninja && (
        <>
          <h1>{ninja.name}</h1>
          <p>{ninja.email}</p>
          <p>{ninja.website}</p>
          <p>{ninja.address.city}</p>
        </>
      )}
    </div>
  );
};

export default Details;
