import styles from "../styles/home.module.css";

const HeadingOne = () => {
  return (
    <div>
      <h1 className={styles.h1}>
        <span className={styles.headingOne}>Heading</span> One
      </h1>
    </div>
  );
};

export default HeadingOne;
