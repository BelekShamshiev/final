import s from "./Television.module.css"
import React, { useState } from "react";
import { television } from "@/constans/Television";
import TelevisionTv from "./TelevisionTv/TelevisionTv";
import Footer from "../footer/Footer";
import Header from "../Header/Header";

const Television = () => { 
       const [select , setSelect] = useState('')

    return (
                <div className={s.container}>
                  <Header/>

        <div className={s.home}>
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
            <option className={s.option} value="Sony">
              {" "}
              <input type="checkbox" />
              Sony
            </option>
            <option className={s.option} value="Samsung">
              {" "}
              <input type="checkbox" />
              Samsung
            </option>
          </select>
        </div>
        </div>
        <div className={s.card}>
             { television.map((item) => {
                return <TelevisionTv id={item.id} img={item.img} title={item.title} oldprice={item.oldprice} price={item.price}/>
            })}
        </div>
        </div>
        <Footer/>
    </div>
    );
};

export default Television;