import React from "react";
import image from "../../../assets/images/unknown.png";
import styles from "./ArticlePreview.module.css";


const ArticlePreview = props => {
  return (
    <div className={styles.ArticlePreview}>
      <a href={`${props.article.url}`} style={{ textDecoration: "none"}} target="_blank" rel="noopener noreferrer">
        <p>
          {props.article.title}
        </p>
        <img
          src={
            props.article.image
              ? props.article.image
              : image
          }          
          alt={props.article.name}
        />
    </a>
    </div>
  );
};

export default ArticlePreview;
