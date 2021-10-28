import React from "react";
import styles from './style.module.scss';

const Toolbar = () => {
    return (
         <header className={styles.toolbarOne}>
            <div className={styles.toolbarOneContainer}>
                <div>
                    <p className={styles.logo}>FASHION LOGO</p>
                </div>
                <div>
                    <ul className={styles.socialMedia}>
                        <li><a href='#new_collection'>NEW COLLECTION</a></li>
                        <li><a href='#shop'>SHOP</a></li>
                        <li><a href='#about_us'>ABOUT US</a></li>
                        <li><a href='#contact'>CONTACT</a></li>
                    </ul>
                </div>
                <nav>
                    <div className={styles.burger}>
                        <span/>
                    </div>
                </nav>
            </div>
        </header>
             )
}

export default Toolbar