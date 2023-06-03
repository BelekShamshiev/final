import Link from "next/link";
import styles from "./Second.module.css";
import SecondCard from "./SecondCard/SecondCard";
import Objekt from "../Objekt/Objekt";
import { tovar } from "@/constans/Tovar";

const Second = () => {
  return (
    <div className={styles.second}>
      <div className={styles.second__container}>
        <div className={styles.second__body}>
          <div className={styles.second__title}>
            <h1>Товары</h1>
          </div>
          <div className={styles.second__link}>
            <ul>
              <li>
                <a href="#">
                  <span>Лидеры продаж</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Новинки</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Акции</span>
                </a>
              </li>
            </ul>
            <ul>
              <Link href="/catalog">
                <p>Смотреть все &#8594;</p>
              </Link>
            </ul>
          </div>
          <div className={styles.second__card}>
            {tovar.map((item) => {
              return (
                <SecondCard
                  id={item.id}
                  img={item.img}
                  title={item.title}
                  oldprice={item.oldprice}
                  price={item.price}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second;
