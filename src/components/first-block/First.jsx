import styles from "./First.module.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper";
import Link from "next/link";

const First = () => {
  return (
    <div className={styles.first}>
      <div className={styles.first__container}>
        <div className={styles.first__body}>
          <div className={styles.banner__block}>
            <Swiper
            grabCursor
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              speed={2500}
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
                      Iphone 14 pro и Iphone 14 <br /> pro Max уже в продаже.{" "}
                    </p>
                    <Link href="/second">
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
                      Apple Watch Series 6 <br />уже в продаже.{" "}
                    </p>
                    <Link href="/second">
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
                      Xiaomi 13 и 13pro <br /> pro Max уже в продаже.{" "}
                    </p>
                    <Link href="/second">
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
                          src="/Image/FirstBlock/apple-watch.png"
                          alt="Apple-Watch"
                          width={128}
                          height={151}
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className={styles.banner__product_slide}>
                        <Image
                          src="/Image/FirstBlock/apple-watch.png"
                          alt="Apple-Watch"
                          width={128}
                          height={151}
                        />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                  <div className={styles.banner__product_info}>
                    <p>
                      Умные часы Apple Watch SE 40 мм <br /> Aluminium Case,
                      серебристый/синий омут
                    </p>
                    <Image
                      src="/Image/FirstBlock/reviews.png"
                      alt="Reviews"
                      width={73}
                      height={12}
                    />
                    <div className={styles.product_info_subtitle}>
                      <div>
                        <p>33 990 ₽</p>
                        <h2>31 990 ₽</h2>
                      </div>
                      <div>
                      <Link href="/second">
                        <button>Купить</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                  <Image className={styles.card_img}
                    src="/max.png"
                    alt="Smartfon"
                    width={173}
                    height={185}
                  />
                </div>
              </div>
              <div className={styles.catalog__card}>
                <p>Смарт-часы</p>
                <div>
                  <Image className={styles.card_img}
                    src="/watch.png"
                    alt="Smartfon"
                    width={173}
                    height={165}
                  />
                </div>
              </div>
              <div className={styles.catalog__card}>
                <p>Аксессуары</p>
                <div>
                  <Image className={styles.card_img}
                    src="/agoz.png"
                    alt="Smartfon"
                    width={153}
                    height={160}
                  />
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
