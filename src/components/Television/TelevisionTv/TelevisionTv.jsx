import React from 'react';
import styles from "./TelevisionTv.module.css"
import Link from 'next/link';
import Image from 'next/image'; 
import Information from '@/components/Information/Information';
    const TelevisionTv = ({ img, title, oldprice, price }) => {
    
    return (
        <div>
             <div className={styles.second__item}>
        <div className={styles.second__card_container}>
          <div className={styles.second__card_body}>
            <div className={styles.second__card_title}>
              <h1>Хит</h1>
              <div className={styles.card__icon}>
              
                <div className={styles.second__card__favorites}></div>
              </div>
            </div>
            <div className={styles.second__card_img}>
              <Image src={img} alt="Apple-Watch" width={150} height={155} />
            </div>
            <div className={styles.second__card_info}>
              <p>{title}</p>
              sdfffdsfasadsd
              <div className={styles.second__card_subtitle}>
                <div>
                  <p>{oldprice}₽</p>
                  <h2>{price}₽</h2>
                </div>
                <div>
                <Link className={styles.btn} href='/information'>Купить</Link>
                </div>
              </div>
              <div className={styles.info}>
                <Information/>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default TelevisionTv;