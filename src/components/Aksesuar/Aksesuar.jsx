import React, { useState } from "react";
import s from "../PurchaseFirstPage/PurchaseFirst.module.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Button, Modal } from "antd";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";
import PurchaseSecond from "../PurchaseSecondPage/PurchaseSecond";
import Header from "../Header/Header";
const Aksesuar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className={s.purchaseFirst}>
        <Header />
        <div className={s.purchaseFirst__container}>
          <div className={s.purchaseFirst__body}>
            <div className={s.purchaseFirst__link}>
              <a href="#"> Главная /</a>
              <a href="#"> Смартфоны /</a>
              <a href="#"> Apple /</a>
              <span>Беспроводные наушники Apple AirPods Pro 2, белый</span>
            </div>
            <div className={s.purchaseFirst__title}>
              <h1>Беспроводные наушники Apple AirPods Pro 2, белый</h1>
            </div>
            <div className={s.purchaseFirst__content}>
              <div className={s.purchaseFirst__swiper}>
                <div className={s.purchaseFirst__swiper_container}>
                  <div className={s.purchaseFirst__swipe_title}>
                    <h1>Хит</h1>
                  </div>
                  <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={true}
                    autoplay={{ delay: 1500 }}
                    speed={700}
                    modules={[Navigation, Autoplay]}
                    className={s.purchaseFirstSwiper}
                  >
                    <SwiperSlide>
                      <div className={s.purchaseFirst_slide}>
                        <Image
                          src="/airpods.svg"
                          alt="Smartfon"
                          width={362}
                          height={362}
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className={s.purchaseFirst_slide}>
                        <Image
                          src="/airpods.svg"
                          alt="Smartfon"
                          width={362}
                          height={362}
                        />
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
              <div className={s.purchaseFirst__characteristic}>
                <div className={s.purchaseFirst__characteristic_title}>
                  <div className={s.purchaseFirst__title_info}>
                    <h1>44 999₽</h1>
                    <h2>39 999 ₽</h2>
                  </div>
                  <div className={s.purchaseFirst__subtitle_info}>
                    <a href="#" onClick={showModal}>
                      Смотреть отзывы
                    </a>
                    <div className={s.modal}>
                      <Modal
                        className={s.modal_modal}
                        title=""
                        open={isModalOpen}
                        onOk={handleOk}
                        onCancel={handleCancel}
                      >
                        <div className={s.all_otziv}>
                          <div className={s.first_otziv}>
                            <Image
                              src="/user.png"
                              alt="user_img"
                              width={50}
                              height={50}
                            ></Image>
                            <p>
                            Качество звука, предоставляемое AirPods, действительно впечатляет. Звук ясный, чистый и детализированный, а басы достаточно глубокие, чтобы наслаждаться любимой музыкой или прослушивать аудиокниги. 
                            </p>
                          </div>
                          <div className={s.second_otziv}>
                            <Image
                              src="/user_girl.png"
                              alt="user_img"
                              width={50}
                              height={50}
                            ></Image>
                            <p>
                            Беспроводное соединение AirPods с устройствами Apple - настоящая находка. Они с легкостью подключаются к iPhone, iPad и MacBook и мгновенно готовы к использованию.
                            </p>
                          </div>
                          <div className={s.thre_otziv}>
                            <Image
                              src="/user_two.png"
                              alt="user_img"
                              width={50}
                              height={50}
                            ></Image>
                            <p>
                            В целом, AirPods - это отличные беспроводные наушники.
                            </p>
                          </div>
                        </div>
                      </Modal>
                    </div>{" "}
                  </div>
                </div>
                <div className={s.purchaseFirst__characteristic_info}>
                  <div className={s.characteristic_info_first}>
                    <div className={s.characteristic_info_first_title}>
                      <h1>Модель:</h1>
                    </div>
                    <div className={s.characteristic_info_first_btn}>
                      <button>
                        Беспроводные наушники Apple AirPods Pro 2, белый
                      </button>
                    </div>
                  </div>
                  <div className={s.characteristic_info_second}>
                    <div className={s.characteristic_info_second_1}>
                      <div className={s.info_second_content}>
                        <h1>Цвет:</h1>
                        <p>White</p>
                      </div>
                      <div className={s.info_second_title}></div>
                    </div>
                    <div className={s.characteristic_info_second_2}>
                      <div className={s.info_second_2}></div>
                      <div className={s.info_second_2_down}></div>
                    </div>
                  </div>
                </div>
                <div className={s.purchaseFirst__bottom_info}>
                  <button>Купить</button>
                  <div>
                    <p>
                      <Image
                        src="/Image/Purchaseimg/logo1.svg"
                        alt="Smartfon"
                        width={14}
                        height={14}
                      />
                      Доставка по Москве в пределах МКАД от 700₽
                    </p>
                    <p>
                      <Image
                        src="/Image/Purchaseimg/logo2.svg"
                        alt="Smartfon"
                        width={14}
                        height={14}
                      />
                      Доставка по всей России через транспортную компанию СДЕК,
                      по 100% оплате
                    </p>
                    <p>
                      <Image
                        src="/Image/Purchaseimg/logo3.svg"
                        alt="Smartfon"
                        width={14}
                        height={14}
                      />
                      Отправка происходит в течении часа после оплаты товара.
                    </p>
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

export default Aksesuar;
