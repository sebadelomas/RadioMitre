import React from "react";
import mitreLogo from "../../assets/images/logo.svg";
import styles from "./Logo.module.css";

const Logo = () => (
  <div className={styles.Logo}>
    <img src={mitreLogo} alt="Radio Mitre" />
  </div>
);

export default Logo;
