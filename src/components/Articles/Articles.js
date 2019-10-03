import React from 'react';
import ArticlePreview from './ArticlePreview/ArticlePreview';
import styles from "./Articles.module.css";

const Articles = (props) => {
    const matches = props.data.map(each => (
        <ArticlePreview article={each} key={each.name} />
    ));
    return (
        <div className={styles.Articles}>
            {matches}
        </div>
    );
}

export default Articles;