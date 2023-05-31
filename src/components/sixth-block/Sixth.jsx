import styles from './Sixth.module.css'
import SixthCard from './sixthBlock-card/SixthCard';

const Sixth = () => {
    return (
        <div className={styles.fifth}>
            <div className={styles.fifth__container}>
                <div className={styles.fifth__body}>
                    <div>
                        <div className={styles.fifth__title}>
                            <h1>Просмотренные товары</h1>
                        </div>
                        <div className={styles.fifth__card}>
                            <SixthCard />
                            <SixthCard />
                            <SixthCard />
                            <SixthCard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sixth;