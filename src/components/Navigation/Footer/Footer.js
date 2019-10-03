import React from 'react'
import styles from './Footer.module.css';

const footer = () => (
    <footer className={styles.Footer}>
        <p>Creado por Sebastián Cabrera</p>
        <a style={{textDecoration: "none"}} target="_blank" rel="noopener noreferrer" href="https://github.com/sebadelomas/radioMitre"><p>Link al repo</p></a>
    </footer>
);

export default footer;