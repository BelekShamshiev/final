import s from "./PurchaseFirst.module.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Button, Modal } from "antd";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";
import PurchaseSecond from "../PurchaseSecondPage/PurchaseSecond";
import Header from "../Header/Header";
import { useState } from "react";
import Information from "../Information/Information";
import Link from "next/link";

const PurchaseFirst = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState(
    "/Image/Purchaseimg/SmartPhone.png"
  );

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  function removeType() {
    setType((current) => !current);

    setStyleClass((prev) => !prev);
  }

  return (
    <div className={s.purchaseFirst}>
      <Header />
      <div className={s.purchaseFirst__container}>
        <div className={s.purchaseFirst__body}>
          <div className={s.purchaseFirst__link}>
            <a href="#"> Главная /</a>
            <a href="#"> Смартфоны /</a>
            <a href="#"> Apple /</a>
            <span> Смартфон Apple iPhone 14 Pro Max 128GB Space Black</span>
          </div>
          <div className={s.purchaseFirst__title}>
            <h1>Смартфон Apple iPhone 14 Pro Max 128GB Space Black</h1>
          </div>
          <div className={s.purchaseFirst__content}>
            <div className={s.purchaseFirst__swiper}>
              <div className={s.purchaseFirst__swiper_container}>
                <div className={s.purchaseFirst__swipe_title}>
                  <h1>Хит</h1>
                  <div className={s.card__icon}></div>
                </div>
                <Swiper
                  slidesPerView={1}
                  spaceBetween={30}
                  loop={true}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  speed={700}
                  modules={[Navigation, Autoplay]}
                  className={s.purchaseFirstSwiper}
                >
                  <SwiperSlide>
                    <div className={s.purchaseFirst_slide}>
                      <Image
                        src={selectedColor}
                        alt="Smartfon"
                        width={322}
                        height={422}
                      />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <div className={s.purchaseFirst__characteristic}>
              <div className={s.purchaseFirst__characteristic_title}>
                <div className={s.purchaseFirst__title_info}>
                  <h1>126 690 ₽</h1>
                  <h2>136 690 ₽</h2>
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
                            Я хотел бы поделиться своим впечатлением о новом
                            телефоне, который я недавно приобрел. Этот телефон -
                            настоящая находка!
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
                            Экран этого телефона просто великолепен. Он яркий,
                            четкий и цветопередача на высшем уровне.{" "}
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
                            Качество камеры этого телефона просто поражает. Он
                            оснащен задней камерой, которая делает потрясающие
                            фотографии и видео даже в условиях низкой
                            освещенности.
                          </p>
                        </div>
                      </div>
                    </Modal>
                  </div>
                </div>
              </div>
              <div className={s.purchaseFirst__characteristic_info}>
                <div className={s.characteristic_info_first}>
                  <div className={s.characteristic_info_first_title}>
                    <h1>Модель:</h1>
                  </div>
                  <div className={s.characteristic_info_first_btn}>
                    <button>iPhone 13</button>
                    <button>13 mini</button>
                    <button>13 Pro</button>
                    <button>13 Pro Max</button>
                  </div>
                </div>
                <div className={s.characteristic_info_second}>
                  <div className={s.characteristic_info_second_1}>
                    <div className={s.info_second_content}>
                      <h1>Цвет:</h1>
                      <div className={s.info_second_content_btn}>
                        <button onClick={() => setSelectedColor("/black.jpg")}>
                          <Image
                            src="/Image/Purchaseimg/checkmark.svg"
                            alt="Smartfon"
                            width={17}
                            height={13.5}
                          />
                        </button>
                        <button onClick={() => setSelectedColor("/green.jpg")}>
                          <Image
                            src="/Image/Purchaseimg/checkmark.svg"
                            alt="Smartfon"
                            width={17}
                            height={13.5}
                          />
                        </button>
                        <button onClick={() => setSelectedColor("/ww.jpg")}>
                          <Image
                            src="/Image/Purchaseimg/checkmark.svg"
                            alt="Smartfon"
                            width={17}
                            height={13.5}
                          />
                        </button>
                      </div>
                    </div>
                    <div className={s.info_second}></div>
                  </div>
                  <div className={s.characteristic_info_second_2}>
                    <div className={s.characteristic_info_second_2_content}>
                      <h1>Диагональ экрана:</h1>
                      <p>6.7"</p>
                    </div>
                    <div className={s.characteristic_info_second_2_content}>
                      <h1>Тип экрана:</h1>
                      <p>Super Retina XDR</p>
                    </div>
                    <div className={s.characteristic_info_second_2_content}>
                      <h1>Операционная система:</h1>
                      <p>iOS 15</p>
                    </div>
                  </div>
                </div>
                <div className={s.characteristic_info_third}>
                  <div className={s.purchaseFirst__bottom_info}>
                    {" "}
                    <Link href="/pay">
                      {" "}
                      <button>Купить</button>{" "}
                    </Link>{" "}
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={s.purchaseFirst__information}></div>
      </div>
    </div>
  );
};

export default PurchaseFirst;
