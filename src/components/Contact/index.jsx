import React from "react";
import styles from './style.module.scss';

import Button from "../../UI/Button";

const Contact = () => {
    return (
            <div className={styles.contact} id='contact'>
                <div className={styles.blockFlex}>
                    <h5>Contact</h5>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit molestiae, voluptatibus reiciendis quis praesentium officia labore porro deleniti maxime ut.</p>
                </div>
                <div className={styles.blockFlexTwo}>
                    <input type='text' placeholder='Name'/>
                    <input type='text' placeholder='E-mail'/>
                    <textarea className={styles.textAreaContact} type='text' placeholder='Messages'/>
                    <div > 
                        <Button title='Contact us'/>
                    </div>
                </div>
            </div>
    )
}

export default Contact 