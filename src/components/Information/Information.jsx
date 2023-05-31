import s from "./Information.module.css";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper";

import Image from "next/image";
import Footer from "../footer/Footer";
const Information = () => {
  return (
    <div className={s.home}>
    <div className={s.container}>
      <h1>Смартфон Apple iPhone 14 Pro Max 128GB Space Black</h1>
      <div className={s.grade}>
        <div className={s.grade}>
          <Image src="/top.svg" alt="mackbook" width={30} height={18} />
          <div className={s.grade_two}>
            <Image src="/heart.svg" alt="mackbook" width={30} height={18} />
            <Image src="/car.svg" alt="mackbook" width={30} height={18} />
          </div>
        </div>
      </div>
      <div className={s.desc}>
        <div className={s.product}>
          <Image
            className={s.oriduct_iphone}
            src="./iphone.svg"
            alt="iphone"
            width={450}
            height={300}
          />

          <Swiper
            loop
            grabCursor
            speed={2500}
            navigation={true}
            slidesPerView={3}
            spaceBetween={60}
            modules={[Navigation]}
            className="model"
          >
            <SwiperSlide>
              <Image src="./iphone.svg" alt="iphone" width={80} height={70} />
            </SwiperSlide>
            <SwiperSlide>
              <Image src="./iphone.svg" alt="iphone" width={80} height={70} />
            </SwiperSlide>
            <SwiperSlide>
              <Image src="./iphone.svg" alt="iphone" width={80} height={70} />
            </SwiperSlide>
            <SwiperSlide>
              <Image src="./iphone.svg" alt="iphone" width={70} height={70} />
            </SwiperSlide>
            <SwiperSlide>
              <Image src="./iphone.svg" alt="iphone" width={70} height={70} />
            </SwiperSlide>
            <SwiperSlide>
              <Image src="./iphone.svg" alt="iphone" width={70} height={70} />
            </SwiperSlide>
            <SwiperSlide>
              <Image src="./iphone.svg" alt="iphone" width={70} height={70} />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className={s.title}>
          <h1>126 690 ₽</h1>
          <h2>136 690 ₽</h2>       <div className={s.rating_area}>
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
        </div>   
      </div>
    </div>      
    <Footer/>

    </div>
  );
};

export default Information;
