import React from "react";
import styles from './style.module.scss';

const Button = (props) => {
    return (
         <button className={styles.button}>{props.title}</button>
    )
}

export default Button