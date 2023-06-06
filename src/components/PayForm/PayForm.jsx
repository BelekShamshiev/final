import React, { useState } from "react";
import s from "./PayForm.module.css";
import { Checkbox, Button, Input, InputNumber } from "antd";

const PayForm = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethods, setPaymentMethods] = useState([]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handlePaymentMethodChange = (checkedValues) => {
    // Ограничение выбора только одного способа оплаты
    if (checkedValues.length > 0) {
      setPaymentMethods([checkedValues[checkedValues.length - 1]]);
    } else {
      setPaymentMethods([]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Простая валидация имени и адреса
    if (name.trim() === "") {
      alert("Пожалуйста, введите ваше имя и фамилию.");
      return;
    }

    if (address.trim() === "") {
      alert("Пожалуйста, введите ваш адрес.");
      return;
    }

    // Отправка формы или выполнение других действий
    console.log("Форма отправлена!");
    console.log("Имя:", name);
    console.log("Адрес:", address);
    console.log("Способы оплаты:", paymentMethods);
  };

  return (
    <div className={s.container}>
      <div className={s.title}>
        <h1>Форма Оплаты</h1>
        <form onSubmit={handleSubmit}>
          <div className={s.title_input_all}>
            <div className={s.first_input}>
              <Input
                className={s.input_first}
                placeholder="Ваше Имя и Фамилия (как в паспорте)"
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <div className={s.second_input}>
              <Input
                className={s.input_second}
                placeholder="Ваш Адрес"
                value={address}
                onChange={handleAddressChange}
              />
            </div>
          </div>
          <h2 className={s.sposoby}> Способы Оплаты</h2>
          <div className={s.all_checkbox}>
            <div className={s.first_checkbox}>
              <Checkbox.Group onChange={handlePaymentMethodChange}>
                <Checkbox value="При получении">При получении</Checkbox>
              </Checkbox.Group>
            </div>
            <div className={s.second_checkbox}>
              <Checkbox.Group onChange={handlePaymentMethodChange}>
                <Checkbox value="По Карте" disabled={paymentMethods.length > 0}>
                  По Карте
                </Checkbox>
              </Checkbox.Group>
            </div>
          </div>
          <div className={s.btn_div}>
          <button className={s.btn} type="primary" htmlType="submit"> Отправить</button>
          </div>
          {/* <Button type="primary" htmlType="submit">Отправить</Button> */}
        </form>
      </div>
    </div>
  );
};

export default PayForm;
