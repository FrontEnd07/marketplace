import React from 'react';
import style from "./Header.module.scss"
import { Link } from "react-router-dom";
import img from "@assets/Vendor/Header/Logo.svg"

const Header = () => {
    return (
        <div className={style.main}>
            <div className={style.logo}>
                <Link to="/">
                    <img src={img} alt="логотип" />
                </Link>
            </div>
            <div className={style.contact}>
                <Link to="/contact">
                    Контакты
                </Link>
            </div>
        </div>
    );
};

export default Header;
