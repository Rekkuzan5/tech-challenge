import Head from "next/head";
import Link from "next/link";
import Cards from "../components/Cards";
import HeadingOne from "../components/HeadingOne";
import styles from "../styles/home.module.css";
import Image from "next/image";
import { useState } from "react";
import Name from "../components/Name";
/* Author: Cameron Stapp
   Midwestern Interactive Tech Challenge
*/

/* Pull data from API to pass into Card Component */

export const getStaticProps = async () => {
  const res = await fetch("https://api.mwi.dev/content/home");
  const data = await res.json();
  console.log(data);

  return {
    props: { cards: data },
  };
};

function HomePage({ cards }) {
  return (
    <div>
      <Head>
        <title>Tech Challenge - Home</title>
        <meta
          name="keywords"
          content="Midwest Interactive, Tech Challenge, Next.js"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div className={styles.body}>
        {/*  <NavBar /> */}
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <Image src="/Logo.png" width="350" height="73" />
          </div>
          <Link href="/contact">
            <a className={styles.a}>contact</a>
          </Link>
        </nav>
        <div className={styles.cardContainer}>
          <Cards
            title={cards.data[0].title}
            content={cards.data[0].content}
            image={
              <img src="https://raw.githubusercontent.com/Midwestern-Interactive/tech-challenge/master/assets/Talkie.png" />
            }
          />
          <Cards
            title={cards.data[1].title}
            content={cards.data[1].content}
            image={
              <img src="https://raw.githubusercontent.com/Midwestern-Interactive/tech-challenge/master/assets/Rabbit.png" />
            }
          />
          <Cards
            title={cards.data[2].title}
            content={cards.data[2].content}
            image={
              <img src="https://raw.githubusercontent.com/Midwestern-Interactive/tech-challenge/master/assets/Shield.png" />
            }
          />
        </div>
        <div className={styles.bottom}>
          <HeadingOne />
          <Name />{" "}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
