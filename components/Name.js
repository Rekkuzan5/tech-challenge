import styles from "../styles/home.module.css";
import { useState } from "react";

const Name = () => {
  const [name, setName] = useState("");
  const [show, setShow] = useState(false);

  /*  Compare show state to validate if names list should be generated, if not then send an alert message telling
      user that the action has already been performed.  */

  function validateState() {
    if (show) {
      console.log(show);
      return alert("You have already performed this action!");
    }
    filterObjects();
    setShow(true);
    console.log(show);
  }

  /*  Create a new array that combines the two object's array of names, and then use Set to filter out duplicate names.
      Then output each name in a <li> object, which the gets placed inside an <ul> tag. */

  function filterObjects() {
    let namesObjectOne = {
      names: ["Matt Johnson", "Bart Paden", "Ryan Doss", "Jared Malcolm"],
    };
    let namesObjectTwo = {
      names: ["Matt Johnson", "Bart Paden", "Jordan Heigle", "Tyler Viles"],
    };

    const uniqueNames = namesObjectOne.names.concat(namesObjectTwo.names);
    const namesArr = Array.from(new Set(uniqueNames));

    console.log(namesObjectOne, namesObjectTwo);
    console.log(namesArr);

    const final = namesArr.map((name, i) => {
      return <li key={i}>{name}</li>;
    });

    setName(final);
  }

  return (
    <div>
      <p className={styles.p}>
        Remove the duplicate in 2 Javascript objects and output the list of
        distinct names in an unordered list when{" "}
        <a className={styles.span} onClick={validateState}>
          this link
        </a>{" "}
        is clicked.
      </p>
      <ul className={styles.namesObject}>{name}</ul>
    </div>
  );
};

export default Name;
