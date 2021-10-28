import React from "react";
import styles from './style.module.scss';

import exampleIMgOne from '../../UI/images/grl1.png';
import exampleIMgTwo from '../../UI/images/grl2.png';
import Button from "../../UI/Button";

const NewCollection = () => {
    return (
         <div className={styles.newCollection}>
              <div className={styles.containerFlex}>
                   {/* <div> */}
                         <img src={exampleIMgOne} alt='' />
                         <div className={styles.nCButton}>
                              <Button title='see new collection' />
                         </div>
                    {/* </div> */}

              </div>
              <div className={styles.containerFlex}>
                    <div className={styles.pinkBock}>
                              <p>21 / 2022 <br/> collection</p>
                              <h1>New vapor collection</h1>
                              <img src={exampleIMgTwo} alt="" />
                    </div>
              </div>
         </div>
             )
}

export default NewCollection