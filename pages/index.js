import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
          itaque velit quo.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
          inventore dignissimos iste quos tenetur? Distinctio dignissimos eum
          delectus rerum ad, reiciendis autem facilis iure id accusantium quos
          voluptatibus labore, voluptates veritatis. Incidunt, quis sint. Non
          quae consequuntur, sapiente, quam alias commodi voluptatem laudantium
          nostrum, veritatis quos dolorem. Voluptate, laboriosam vel.
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Lisitng</a>
        </Link>
      </div>
    </>
  );
}
