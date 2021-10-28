import React from "react";
import styles from './style.module.scss';

import logo from '../../UI/images/fc.200.16.png'
import Header from "../Header";


const Footer = () => {
    return (
            <div className={styles.footer}>
                <div className={styles.footerContainer}>
                    <img src={logo} alt="" />
                    <div className={styles.footerWrapper}>
                        <div className={styles.footerWrapperBlock}>
                            <p>New Collection</p>
                            <p>Shop</p>
                            <p>About us</p>
                            <p>Contact</p>
                        </div>
                        <div className={styles.footerWrapperBlock}>
                            <p>FAQS</p>
                            <p>Privacy policy</p>
                        </div>
                        <div className={styles.footerWrapperBlockThree}>
                            <p>+00 123 456 789</p>
                            <p>NAME STREET</p>
                            <p>123456 CITY NAME</p>
                            <p>COUNTRY</p>
                        </div>
                    </div>
                    <div className={styles.footerCopyright}>
                        <div className={styles.footerCopyrightFlex}>
                            <div><p>copyright | your name</p></div>
                        </div>
                        <div className={styles.footerCopyrightFlexTwo}>
                            <a href="#">INSTAGRAM</a>
                            <a href="#">FACEBOOK</a>
                            <a href="#">TWITTER</a>
                        </div>

                    </div> 

                </div>
            </div>
    )
}

export default Footer