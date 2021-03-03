import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from 'next/router';

const NotFound = () => {
  const router = useRouter()

  useEffect(() => {
    let timer = setTimeout(() => {
      // router.go(-1)
      router.push("/")
    }, 3000);
    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <div className="not-found">
      <h1>Ooooopsss</h1>
      <h2>That page cannot be found.</h2>
      <p>
        Go back to the{" "}
        <Link href="/">
          <a>Homepage</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
