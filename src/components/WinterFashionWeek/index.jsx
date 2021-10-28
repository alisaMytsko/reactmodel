import React from "react";
import styles from './style.module.scss';

import wfphoto from '../../UI/images/wf1440.810.png';
import Button from "../../UI/Button";

const WinterFashion = () => {
    return (
            <div className={styles.winterFashion}>
                <h3>Fall / Winter Fashion week</h3>
                <div className={styles.wfContainer}>
                    <img src={wfphoto} alt="" />
                    <div className={styles.wfBlockWrapper}>
                        <p>See the full <br/> show online</p>
                        <Button title='here'/>
                    </div>

                </div>
            </div>
    )
}

export default WinterFashion