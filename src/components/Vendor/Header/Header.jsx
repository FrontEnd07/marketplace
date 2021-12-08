import React from 'react';
import style from "./Header.module.scss"
import img from "@assets/Vendor/Header/Logo.svg"

const Header = () => {
    return (
        <div className={style.main}>
            <div className={style.logo}>
                <img src={img} alt="логотип" />
            </div>
            <div className={style.contact}>
                Контакты
            </div>
        </div>
    );
};

export default Header;
