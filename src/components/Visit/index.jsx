import React from 'react';
import styles from './style.module.scss';



const Visit = () => {
    return(
        <div>
            <div className={styles.visit}>
                <h5>visit our stores</h5>
                <div className={styles.visitWrapperBlockCountry}>
                    <div className={styles.visitBlockCountry}>
                        <p className={styles.visitTown}>Rome</p>
                        <p className={styles.visitAddress}>
                            Name St number 1<br/>
                            123456, City <br/>
                            Country <br/>
                            +00 123 456 789
                        </p>
                    </div>
                    <div className={styles.visitBlockCountry}>
                        <p className={styles.visitTown}>Milan</p>
                        <p className={styles.visitAddress}>
                            Name St number 2<br/>
                            123456, City <br/>
                            Country <br/>
                            +00 123 456 789
                        </p>
                    </div>
                    <div className={styles.visitBlockCountry}>
                        <p className={styles.visitTown}>Paris</p>
                        <p className={styles.visitAddress}>
                            Name St number 3<br/>
                            123456, City <br/>
                            Country <br/>
                            +00 123 456 789
                        </p>
                    </div>
                    <div className={styles.visitBlockCountry}>
                        <p className={styles.visitTown}>London</p>
                        <p className={styles.visitAddress}>
                            Name St number 4<br/>
                            123456, City <br/>
                            Country <br/>
                            +00 123 456 789
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Visit