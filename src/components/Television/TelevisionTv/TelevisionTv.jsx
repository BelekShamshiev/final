import React from 'react';
import styles from "./TelevisionTv.module.css"
import Link from 'next/link';
import Image from 'next/image'; 
    const TelevisionTv = ({ img, title, oldprice, price }) => {
    
    return (
        <div>
             <div className={styles.second__item}>
        <div className={styles.second__card_container}>
          <div className={styles.second__card_body}>
            <div className={styles.second__card_title}>
              <h1>Хит</h1>
              <div className={styles.card__icon}>
                <Image
                  src="/Image/FirstBlock/Union.png"
                  alt="Union"
                  width={14}
                  height={17}
                />
                <div className={styles.second__card__favorites}></div>
              </div>
            </div>
            <div className={styles.second__card_img}>
              <Image src={img} alt="Apple-Watch" width={150} height={155} />
            </div>
            <div className={styles.second__card_info}>
              <p>{title}</p>
              <Image
                src="/Image/FirstBlock/reviews.png"
                alt="Reviews"
                width={73}
                height={12}
              />
              <div className={styles.second__card_subtitle}>
                <div>
                  <p>{oldprice}₽</p>
                  <h2>{price}₽</h2>
                </div>
                <div>
                <Link className={styles.btn} href='/information'>Купить</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default TelevisionTv;