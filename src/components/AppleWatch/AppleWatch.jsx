import React from "react";
import s from "../Mobile/Mobile.module.css";
import { useState } from "react";
import Header from "../Header/Header";
import { watch } from "@/constans/watch";
import AppleWatchCart from "./AppleWatchCart/AppleWatchCart";
import { applewatch } from "@/constans/applewatch";
const AppleWatch = () => {
  const [select, setSelect] = useState("");

  return (
    <div className={s.container}>
      <Header />
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
        </div>
        <div className={s.card}>
          {applewatch.map((item) => {
            return (
              <AppleWatchCart
                id={item.id}
                img={item.img}
                title={item.title}
                oldprice={item.oldprice}
                price={item.price}
              ></AppleWatchCart>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AppleWatch;
