import s from "./Product.module.css";
import FifthCard from "../Objekt/Objekt";
import React, { useState } from "react";
import { object } from "@/constans/Product";
import Footer from "../footer/Footer";
import Header from "../Header/Header";
const Product = () => {
  const [select, setSelect] = useState("");

  return (
    <div className={s.home}>
      <Header/>
    <div className={s.container}>
      <h1 className={s.smartfon}></h1>
      <div className={s.filter}>
        <div className={s.filter_brend}>
          <h1>Фильтр по параметрам</h1>
          <select
            className={s.filter_brend_select}
            value={select}
            onChange={(e) => setSelect(e.target.value)}
            name=""
            id=""
          >
            <option className={s.option} value="Apple">
              {" "}
              <input type="checkbox" />
              Apple
            </option>
            <option className={s.option} value="Samsung">
              {" "}
              <input type="checkbox" />
              Samsung
            </option>
            <option className={s.option} value="Xiaomi">
              {" "}
              <input type="checkbox" /> Xiaomi
            </option>
          </select>
        </div>
        <div className={s.money_filter}></div>
      </div>
      <div className={s.product}>
        {object.map((item) => {
          return < FifthCard id={item.id} img={item.img} title={item.title} oldprice={item.oldprice} price={item.price}/>;
        })}
      </div>
    </div> 
       <Footer/>

    </div>
  );
};

export default Product;
