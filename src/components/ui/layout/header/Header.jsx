import React, { useState } from "react";
import style from "./header.module.scss";
import Button from "#ui/Buttons/Button";
import Logo from "#assets/images/Logo.svg";
import { Link, Route, Routes } from "react-router-dom";
import Home from "../../../screens/home/Home";
import Ad from "../../../screens/ad/Ad";

const Header = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);
  const links = ["Выход", "Сменить пароль", "Поддержать", "О нас"];
  const id = 3;
  return (
    <><header className={style.header}>
   <Link to="/"> <div className={style.logo}>
      <img src={Logo} alt="Logo" />
    </div></Link>

    <div className={style.menu}>
      <Button variant="blue">создать объявление 🧑🏼‍💻</Button>
      <Button>мои объявления 📢</Button>
      <Button
        variant="yellow"
        onClick={() => setIsNavShowing((prev) => !prev)}
      >
        ...
      </Button>
      <div className={style.points}>
        <ul
          className={`${style.links}   ${
            isNavShowing ? style.show : style.hide
          }`}
        >
          {links.map((name) => {
            return <li className={style.active} key={name}>{name}</li>;
          })}
        </ul>
      </div>
    </div>
  </header>
  
  </>
  );
};

export default Header;
