import React, { useState } from "react";
import axios from "axios";
import s from "./Login.module.css";
import { Input } from "antd";
import Link from "next/link";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/login", { name, email });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={s.login_boss}>
      <div className={s.login}>
        <div className={s.login_title}>
          <h1>Log In</h1>
        </div>
        <form className={s.login_form} onSubmit={handleSubmit}>
          <Input
            className={s.login_form_name}
            placeholder="Ваше имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            className={s.login_form_pasword}
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className={s.btn}>
            <div className={s.login_btn}>
              <button type="submit">Log In</button>
            </div>
              <Link className={s.login_btn_admin} href="/admin">
                Log In like Admine
              </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
