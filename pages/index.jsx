import Head from "next/head";
import Image from "next/image";
import Features from "../components/Features";
import Greet from "../components/Greet";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>fooding kolkata </title>
        <meta name="description" content="best food app in town " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Features />
    </div>
  );
}
