import styles from './Fifth.module.css'
import Image from 'next/image';

const Fifth = () => {
    return (
        <div className={styles.fifth}>
            <div className={styles.fifth__container}>
                <div className={styles.fifth__body}>
                    <div className={styles.fifth__form}>
                        <div className={styles.form__title}>
                            <div className={styles.form__title_main}>
                                <h1>Всем своим покупателем <br /> мы говорим: <br />
                                    «Глупый вопрос — не <br /> заданный вопрос!»  </h1>
                            </div>
                            <div className={styles.form__subtitle}>
                                <Image src='/Image/FifthImg/smileLogo.png' alt='Happy-Smile' width={37} height={37} />
                                <p>Так что не стесняйтесь! Пишите, <br /> звоните, консультируйтесь. Мы <br /> всегда рады Вам помочь!</p>
                            </div>
                        </div>
                        <div className={styles.form__info}>
                            <div className={styles.form__filling}>
                                <input type="text" placeholder='Ваше имя' />
                                <input type="text" placeholder='Телефон' />
                            </div>
                            <h2>Предпочтительный способ связи:</h2>
                            <div className={styles.form__social_choice}>
                                <div>
                                    <input type="radio" id="contactChoice1"
                                        name="contact" value="social" />
                                    <label for="contactChoice1">Telegram</label>
                                </div>
                                <div>
                                    <input type="radio" id="contactChoice2"
                                        name="contact" value="social" />
                                    <label for="contactChoice2">WhatsApp</label>
                                </div>
                                <div>
                                    <input type="radio" id="contactChoice3"
                                        name="contact" value="phone" />
                                    <label for="contactChoice3">Звонок</label>
                                </div>
                            </div>
                            <button>Отправить</button>
                            <div className={styles.form__checkbox}>
                                <input type="checkbox" id="text" name="interest" />
                                <label for="text">Отправляя заявку, вы даете согласие на обработку персональных данных</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Fifth;