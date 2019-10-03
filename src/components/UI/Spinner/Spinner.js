import React from "react";
import styles from "./Spinner.module.css";

const Spinner = () => {
  return (
    <div className={styles.Spinner}>
      <div className={styles.CenterOnPage}>
        <div class={styles.ldsFacebook}><div></div><div></div><div></div></div>
      </div>
    </div>
  );
};

export default Spinner;
