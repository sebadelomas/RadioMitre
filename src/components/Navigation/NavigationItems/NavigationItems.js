import React from "react";
import styles from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = () => {
  return (
    <ul className={styles.NavigationItems}>
      <NavigationItem link="/">
        Noticias
      </NavigationItem>
    </ul>
  );
};

export default navigationItems;
