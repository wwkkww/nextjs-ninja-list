import React from "react";
import Link from 'next/link';
import styles from "../../styles/Ninjas.module.css";

// this function only runs at build time when component render
// does not run on the browser
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/");
  const data = await res.json();

  // must return an object with 'props' property.
  // it fetch data then put data into the component
  return {
    props: { ninjas: data },
  };
};

const Ninjas = ({ ninjas }) => {
  // console.log("ninjas", ninjas);
  return (
    <div>
      <h1>All Ninjas</h1>
      {ninjas &&
        ninjas.map((ninja) => (
          <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
            <a className={styles.single}>
              <h3>{ninja.name}</h3>
            </a>
          </Link>
        ))}
    </div>
  );
};

export default Ninjas;
