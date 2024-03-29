import Head from "next/head";
import Image from "next/image";
import Features from "../components/Features";
import FoodList from "../components/FoodList";
import Footer from "../components/Footer";
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
      <FoodList />
    </div>
  );
}
