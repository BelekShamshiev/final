import React, { useState } from "react";
import styles from "./Second.module.css";
import SecondCard from "./SecondCard/SecondCard";
import { tovar } from "@/constans/Tovar";

const Second = () => {
  const [tovarList, setTovarList] = useState(tovar);

  const handleCardSwap = () => {
    const updatedTovarList = [...tovarList];
    updatedTovarList.reverse();
    setTovarList(updatedTovarList);
  };

  return (
    <div className={styles.second}>
      <div className={styles.second__container}>
        <div className={styles.second__body}>
          <div className={styles.second__title}>
            <h1>Товары</h1>
          </div>
          <div className={styles.second__link}>
                <button onClick={handleCardSwap}>
                  <span>Акции</span>
                </button>
                <button onClick={handleCardSwap}>
                  <span>Новинки</span>
                </button>
                <button onClick={handleCardSwap}>
                  <span> Лидеры продаж</span>
                </button>
          </div>
          <div className={styles.second__card}>
            {tovarList.map((item) => (
              <SecondCard
                key={item.id}
                img={item.img}
                title={item.title}
                oldprice={item.oldprice}
                price={item.price}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second;
