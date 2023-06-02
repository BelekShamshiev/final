import s from "../PurchaseFirstPage/PurchaseFirst.module.css";
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";
import PurchaseSecond from "../PurchaseSecondPage/PurchaseSecond";
import Header from "../Header/Header";

const Makbook = () => {

  function removeType() {
    setType(current => !current);

    setStyleClass(prev => !prev);
  }

  return (
    <div className={s.purchaseFirst}>
      <Header/>
      <div className={s.purchaseFirst__container}>
        <div className={s.purchaseFirst__body}>
          <div className={s.purchaseFirst__link}>
            <a href="#"> Главная /</a>
            <a href="#"> Смартфоны /</a>
            <a href="#"> Apple /</a>
            <span>13.3" Ноутбук Apple MacBook Pro 13 2022 2560x1600, Apple M2</span>
          </div>
          <div className={s.purchaseFirst__title}>
            <h1>13.3" Ноутбук Apple MacBook Pro 13 2022 2560x1600, Apple M2</h1>
          </div>
          <div className={s.purchaseFirst__content}>
            <div className={s.purchaseFirst__swiper}>
              <div className={s.purchaseFirst__swiper_container}>

                <div className={s.purchaseFirst__swipe_title}>
                  <h1>Хит</h1>
                  <div className={s.card__icon}>
                    <Image src='/Image/FirstBlock/Union.png' alt='Union' width={14} height={17} />
                    <Image className={s.product__favorites} src='/Image/FirstBlock/like.png' alt='Union' width={19} height={18} />
                  </div>
                </div>
                <Swiper
                  slidesPerView={1}
                  spaceBetween={30}
                  loop={true}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  autoplay={{ delay: 2500 }}
                  speed={700}
                  modules={[Navigation, Autoplay]}
                  className={s.purchaseFirstSwiper}
                >
                  <SwiperSlide>
                    <div className={s.purchaseFirst_slide}>
                    <Image src='/mackbook.svg' alt="Smartfon" width={362} height={362} />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className={s.purchaseFirst_slide}>
                      <Image src='/mackbook.svg' alt="Smartfon" width={362} height={362} />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <div className={s.purchaseFirst__characteristic}>
              <div className={s.purchaseFirst__characteristic_title}>
                <div className={s.purchaseFirst__title_info}>
                  <h1>116 849 ₽</h1>
                  <h2>162 990 ₽</h2>
                </div>
                <div className={s.purchaseFirst__subtitle_info}>
                  <Image src='/Image/FirstBlock/reviews.png' alt="Reviews" width={73} height={12} />
                  <a href="#"> Смотреть отзывы </a>
                </div>
              </div>
              <div className={s.purchaseFirst__characteristic_info}>
                <div className={s.characteristic_info_first}>
                  <div className={s.characteristic_info_first_title}><h1>Модель:</h1></div>
                  <div className={s.characteristic_info_first_btn}>
                    <button>Air MacBook</button>
                    <button>Air MacBook Pro</button>
                  </div>
                </div>
                <div className={s.characteristic_info_second}>
                  <div className={s.characteristic_info_second_1}>
                    <div className={s.info_second_content}>
                      <h1>Цвет:</h1>
                      <div className={s.info_second_content_btn}>
                        <button><Image src='/Image/Purchaseimg/checkmark.svg' alt="Smartfon" width={17} height={13.5} /></button>
                        <button><Image src='/Image/Purchaseimg/checkmark.svg' alt="Smartfon" width={17} height={13.5} /></button>
                        <button><Image src='/Image/Purchaseimg/checkmark.svg' alt="Smartfon" width={17} height={13.5} /></button>
                      </div>
                      <h1>Оперативная память:</h1>
                      <button className={s.info_second_content_btn_2}>8 GB</button>
                      <button className={s.info_second_content_btn_3}>16GB</button>
                    </div>
                    <div className={s.info_second_title}><a href="">Все характеристики &#8594;</a></div>
                  </div>
                  <div className={s.characteristic_info_second_2}>
                    <div className={s.info_second_2}>
                      <h1>Встроенная память:</h1>
                      <div>
                        <button>128 GB</button>
                        <button>256 GB</button>
                      </div>
                    </div>
                    <div className={s.info_second_2_down}>
                      <h1>Экран:</h1>
                      <button>13,3" </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className={s.purchaseFirst__bottom_info}>
                <button>Купить</button>
                <div>
                  <p><Image src='/Image/Purchaseimg/logo1.svg' alt="Smartfon" width={14} height={14} />Доставка по Москве в пределах МКАД от 700₽</p>
                  <p><Image src='/Image/Purchaseimg/logo2.svg' alt="Smartfon" width={14} height={14} />Доставка по всей России через транспортную компанию СДЕК, по 100% оплате</p>
                  <p><Image src='/Image/Purchaseimg/logo3.svg' alt="Smartfon" width={14} height={14} />Отправка происходит в течении часа после оплаты товара.</p>
                </div>    
              </div>
            </div>
          </div>
        </div>
      </div>
      <PurchaseSecond/>
    </div>
  );
};

export default Makbook;
