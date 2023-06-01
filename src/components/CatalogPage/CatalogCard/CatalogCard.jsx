import React from "react";
import s from "../Catalog.module.css";
const CatalogCard = ({title,img}) => {
  return (
    <div>
      <div className={s.catalog__card_items}>
        <div className={s.catalog__card}>
          <div className={s.card__cirsle}></div>
          <p>{title}</p>
          <div>
            <img
              src={img}
              alt="Smartfon"
              width={153}
              height={135}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogCard;
