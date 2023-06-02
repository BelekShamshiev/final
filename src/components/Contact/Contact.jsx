import React from "react";
import Header from "../Header/Header";
import Map from "../Map/Map";
import Fifth from "../fifth-block/Fifth";
import s from "./Contact.module.scss"
import Footer from "../footer/Footer";
const Contact = () => {
  return (
    <div>
      <Header />
      <div className={s.map}>
        <Map />
      </div>
      <div className={s.fith}>
      <Fifth />
      </div>
      <div className={s.footer}>
        <Footer/>
      </div>
    </div>
  );
};

export default Contact;
