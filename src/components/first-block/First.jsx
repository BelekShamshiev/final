import styles from "./First.module.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay,EffectFade } from "swiper";
import Link from "next/link";

const First = () => {
  return (
    <div className={styles.first}>
      <div className={styles.first__container}>
        <div className={styles.first__body}>
          <div className={styles.banner__block}>
            <Swiper  effect="fade"
            grabCursor
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              speed={2200}
              autoplay={{ delay: 1800 }}
              modules={[ Autoplay]}
              className={styles.swiperFirst}
            >
              <SwiperSlide className={styles.swiperSlide}>
                <div className={styles.banner__slide}>
                  <div className={styles.banner__slide_content}>
                    <h1>Большой</h1>
                    <h1>и еще больше</h1>
                    < p>
                      Iphone 14 pro и Iphone 14 <br /> pro Max уже в продаже.
                    </p>
                    <Link href="/mobil">
                    <button>Купить</button>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.swiperSlide}>
                <div className={styles.banner__slide_two}>
                  <div className={styles.banner__slide_content_two}>
                    <h1>Лучший</h1>
                    <h1>И еще лучше</h1>
                    <p>
                      Apple Watch Series 6 <br />уже в продаже.
                    </p>
                    <Link href="/applewatch">
                    <button className={styles.watch_btn}>Купить</button>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.swiperSlide}>
                <div className={styles.banner__slide_thre}>
                  <div className={styles.banner__slide_content_tre}>
                    <h1>Функциональный</h1>
                    <h1>и еще функцианальней</h1>
                    <p>
                      Xiaomi 13 и 13pro <br /> pro Max уже в продаже.
                    </p>
                    <Link href="/mobil/1">
                    <button className={styles.xiaomi_btn}>Купить</button>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>

            </Swiper>
            <div className={styles.banner__product}>
              <div className={styles.banner__product_container}>
                <div className={styles.banner__product_body}>
                  <div className={styles.banner__product_title}>
                    <h1>Товар дня</h1>
                    <div className={styles.card__icon}>
                    </div>
                  </div>
                  <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    grabCursor
                    autoplay={{ delay: 2500 }}
                    speed={2700}
                    modules={[ Autoplay]}
                    className={styles.cardSwiper}
                  >
                    <SwiperSlide>
                      <div className={styles.banner__product_slide}>
                        <Image
                          src="/afaf.jpg"
                          alt="Apple-Watch"
                          width={188}
                          height={181}
                        />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                  <div className={styles.banner__product_info}>
                    <p>
                    Apple Watch Series 8 GPS + Cellular 45mm Graphite Stainless Steel
                    </p>
                    <Image
                      src="/Image/FirstBlock/reviews.png"
                      alt="Reviews"
                      width={73}
                      height={12}
                    />
                    <div className={styles.product_info_subtitle}>
                      <div>
                        <p>60 340 ₽</p>
                        <h2>54 836 ₽</h2>
                      </div>
                      <div>
                      <Link href="/watch/3">
                        <button>Купить</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 className={styles.cotalog}>Каталог</h1>
          <div className={styles.catalog__block}>
            <div className={styles.catalog__card_items}>
              <div className={styles.catalog__card}>
                <p>Смартфоны</p>
                <div>
                  <Link href="/mobil">
                  <Image className={styles.card_img}
                    src="/phone.png"
                    alt="Smartfon"
                    width={133}
                    height={130}
                  /></Link>
                </div>
              </div>
              <div className={styles.catalog__card}>
                <p>Телевизоры</p>
                <div>
                  <Link href="/television">
                  <Image  className={styles.card_img}
                    src="/qled.png"
                    alt="Smartfon"
                    width={150}
                    height={160}
                  /></Link>
                </div>
              </div>
              <div className={styles.catalog__card}>
                <p>Ноутбуки</p>
                <div>
                  <Link href="/laptop">
                  <Image className={styles.card_img}
                    src="/book.png"
                    alt="Smartfon"
                    width={200}
                    height={110}
                  /></Link>
                </div>
              </div>
              <div className={styles.catalog__card}>
                <p>Наушники</p>
                <div>
                  <Link href="/pods">
                  <Image className={styles.card_img}
                    src="/airpods.svg"
                    alt="Smartfon"
                    width={123}
                    height={135}
                  /></Link>
                </div>
              </div>
              <div className={styles.catalog__card}>
                <p>Смарт-часы</p>
                <div>
                  <Link href="/applewatch">
                  <Image className={styles.card_img}
                    src="/watch.png"
                    alt="Smartfon"
                    width={173}
                    height={165}
                  /></Link>
                </div>
              </div>
              <div className={styles.catalog__card}>
                <p>Планшеты</p>
                <div>
                  <Link href="/ipad">
                  <Image className={styles.card_img}
                    src="/ipad.svg"
                    alt="Smartfon"
                    width={133}
                    height={130}
                  /></Link>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default First;
