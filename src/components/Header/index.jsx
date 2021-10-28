import React from "react";
import styles from './style.module.scss';

const Header = () => {
    return (
         <header className={styles.toolbarOne}>
            <div className={styles.toolbarOneContainer}>
                <div  className={styles.language}>
                    <p>RU/ENG</p>
                </div>
                <div>
                    <ul className={styles.socialMedia}>
                        <li><a href='#'>FACEBOOK</a></li>
                        <li><a href='#'>TWITTER</a></li>
                        <li><a href='#'>INSTAGRAM</a></li>
                    </ul>
                </div>
            </div>
        </header>
             )
}

export default Header