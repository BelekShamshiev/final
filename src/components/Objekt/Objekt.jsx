import React from "react";
import styles from "./Objekt.module.css";
import {motion} from "framer-motion"
import Image from "next/image";
import Link from "next/link";
const Objekt = ({ img, title, oldprice, price }) => {
  return (
    < motion.div className={styles.second__item}
    layout
    transition={{
      opacity: { ease: "linear" },
      layout: { duration: 0.5 },
      duration: 0.7,
    }}
    initial="hidden"
    // transition={{ duration: 0.6 }}
    whileInView="visible"
    variants={
      {
        hidden: { scale: 0 },
        visible: { scale: 1 }

      }
    }>
      <div className={styles.second__card_container}>
        <div className={styles.second__card_body}>
          <div className={styles.second__card_title}>
            <h1>Хит</h1>{" "}
            <div className={styles.rating_area}>
              <input type="radio" id="star-5" name="rating" value="5" />
              <label for="star-5" title="Оценка «5»"></label>
              <input type="radio" id="star-4" name="rating" value="4" />
              <label for="star-4" title="Оценка «4»"></label>
              <input type="radio" id="star-3" name="rating" value="3" />
              <label for="star-3" title="Оценка «3»"></label>
              <input type="radio" id="star-2" name="rating" value="2" />
              <label for="star-2" title="Оценка «2»"></label>
              <input type="radio" id="star-1" name="rating" value="1" />
              <label for="star-1" title="Оценка «1»"></label>
            </div>
            <div className={styles.card__icon}>
              <div className={styles.second__card__favorites}></div>
            </div>
          </div>
          <div className={styles.second__card_img}>
            <Image src={img} alt="Apple-Watch" width={150} height={155} />
          </div>
          <div className={styles.second__card_info}>
            <p>{title}</p>

            <div className={styles.second__card_subtitle}>
              <div className={styles.price}>
                <p>{oldprice}₽</p>
                <h2>{price}₽</h2>
              </div>
              <div>
                <Link className={styles.btn} href="/second">
                  Купить
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Objekt;
