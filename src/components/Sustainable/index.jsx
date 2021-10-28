import React from "react";
import styles from './style.module.scss';

import Button from "../../UI/Button";
import imageSustainable from '../../UI/images/grlSu.png'

const Sustainable = () => {
    return (
         <div className={styles.sustainable}>
           <div className={styles.pinkBlock}>
               <h3>Sustainable fashion</h3>
               <p>We design with organic and environmentally friendly materials</p>
               <div className={styles.button}>
                    <Button title='Read more' />
               </div>
           </div>
           <div className={styles.imgBlock}>
                <img src={imageSustainable} alt="" />
           </div>
        </div>
    )
}

export default Sustainable