import React from "react";
import styles from './style.module.scss';

import Button from "../../UI/Button";

const Newsletter = () => {
    return (
            <div className={styles.newsletter}>
                <div className={styles.container}>
                    <h4>Newsletter</h4>
                    <p>Subscribe to our newsletter to keep up to date with our news</p>
                </div>
                <div className={styles.containerTwo}>
                    <input type="text" placeholder='E-mail' />
                    <div className={styles.newsletterButton}>
                        <Button title='Subscribe'/>
                    </div>
                </div>
            </div>
    )
}

export default Newsletter