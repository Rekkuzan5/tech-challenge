import Head from "next/head";
import styles from "../styles/contact.module.css";
import Image from "next/image";
import Link from "next/link";
import HeadingOne from "../components/HeadingOne";
import Contact from "../components/Contact";

/* Contact page, used two side by side divs but has issues with the
   home link when in mobile/responsive views.  Should have used my nav component. */

const contact = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.body}>
        <Head>
          <title>Tech Challenge - Contact</title>
          <meta
            name="keywords"
            content="Midwest Interactive, Tech Challenge, Next.js"
          />
        </Head>
        <div className={styles.left}>
          <div className={styles.logo}>
            <Image src="/Logo.png" width="350" height="73" />
          </div>
          <div className={styles.headingOne}>
            <HeadingOne />
            <div className={styles.p}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <p>
                Tellus cras adipiscing enim eu. Adipiscing vitae proin sagittis
                nisl rhoncus mattis rhoncus. Purus sit amet luctus venenatis
                lectus.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <Link href="/">
            <a className={styles.a}>home</a>
          </Link>
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default contact;
