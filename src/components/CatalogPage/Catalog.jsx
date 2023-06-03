import Link from "next/link";
import s from "./Catalog.module.css";
import Image from "next/image";

const Catalog = () => {
  return (
    <div className={s.catalog}>
      <div className={s.catalog__container}>
        <div className={s.catalog__body}>
          <div className={s.catalog__link}>
            <a href="#"> Главная /</a>
            <span> Каталог товаров</span>
          </div>
          <div className={s.catalog__title}>
            <h1>Каталог</h1>
          </div>
          <div className={s.catalog__card_items}>
            <div className={s.catalog__card}>
              <div className={s.card__cirsle}></div>
              <p>Смартфоны</p>
              <div>
                <Link href="/mobil">
                  <Image
                    src="/violet.svg"
                    alt="Smartfon"
                    width={123}
                    height={135}
                  />
                </Link>
              </div>
            </div>
            <div className={s.catalog__card}>
              <div className={s.card__cirsle}></div>
              <p>Планшеты</p>
              <div>
                <Link href="/ipad">
                <Image
                  src="/ipad.svg"
                  alt="Smartfon"
                  width={123}
                  height={135}
                /></Link>
              </div>
            </div>
            <div className={s.catalog__card}>
              <div className={s.card__cirsle}></div>
              <p>Ноутбуки</p>
              <div>
                <Link href="/laptop">
                  <Image
                    src="/mackbook.svg"
                    alt="Smartfon"
                    width={175}
                    height={105}
                  />
                </Link>
              </div>
            </div>
            <div className={s.catalog__card}>
              <div className={s.card__cirsle}></div>
              <p>TV</p>
              <div>
                <Link href="/television">
                  <Image
                    src="/qled.png"
                    alt="Smartfon"
                    width={173}
                    height={165}
                  />
                </Link>
              </div>
            </div>
            <div className={s.catalog__card}>
              <div className={s.card__cirsle}></div>
              <p>Смарт-часы</p>
              <div>
                <Link href="/applewatch">
                <Image
                  src="/watch.png"
                  alt="Smartfon"
                  width={163}
                  height={155}
                /></Link>
              </div>
            </div>
            <div className={s.catalog__card}>
              <div className={s.card__cirsle}></div>
              <p>Аксессуары</p>
              <div>
                <Image
                  src="/agoz.png"
                  alt="Smartfon"
                  width={123}
                  height={135}
                />
              </div>
            </div>
            <div className={s.catalog__card}>
              <div className={s.card__cirsle}></div>
              <p>Колонки</p>
              <div>
                <Image
                  src="/kolonki.svg"
                  alt="Smartfon"
                  width={150}
                  height={135}
                />
              </div>
            </div>
            <div className={s.catalog__card}>
              <div className={s.card__cirsle}></div>
              <p>Игоровые приставки</p>
              <div>
                <Image
                  src="/xbox.png"
                  alt="Smartfon"
                  width={123}
                  height={135}
                />
              </div>
            </div>
            <div className={s.catalog__card}>
              <div className={s.card__cirsle}></div>
              <p>Квадаракоптеры</p>
              <div>
                <Image
                  src="/kvadra.png"
                  alt="Smartfon"
                  width={133}
                  height={135}
                />
              </div>
            </div>
            <div className={s.catalog__card}>
              <div className={s.card__cirsle}></div>
              <p>Наушники</p>
              <div>
                <Image
                  src="/airpods.svg"
                  alt="Smartfon"
                  width={123}
                  height={135}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
