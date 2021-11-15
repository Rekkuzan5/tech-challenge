import styles from "../styles/home.module.css";

/* Creates a card component that is passed api data to place inside */

function Cards({ image, title, content }) {
  return (
    <div className={styles.card}>
      <div className={styles.img}>{image}</div>
      <div className={styles.info}>
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
      <button className={styles.button}>Learn More</button>
    </div>
  );
}

export default Cards;
