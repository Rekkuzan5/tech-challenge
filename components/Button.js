import styles from "../styles/button.module.css";

const Button = () => {
  return (
    <div className={styles.card}>
      <button className={styles.button}>Submit</button>
    </div>
  );
};

export default Button;
