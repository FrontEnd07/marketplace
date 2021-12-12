import React from 'react';
import style from "./Contact.module.scss";
import { Button } from "@components/Buttons"
import { Link } from "react-router-dom";
import Logo from "@assets/Vendor/Logo.svg"

const Contact = () => {
    return (
        <div className={style.main}>
            <div className={style.info}>
                <div className={style.title}>
                    <img src={Logo} alt="" />
                </div>
                <div className={style.store}>
                    <span>CAKE SHOP</span>
                    <span>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal.
                    </span>
                </div>
                <div className={style.store}>
                    <span>Телефон</span>
                    <span>+992 92 500 50 50</span>
                </div>
                <div className={style.store}>
                    <span>Инстаграм</span>
                    <span>@cake.shop</span>
                </div>
            </div>
            <div className={style.button}>
                <Button>
                    <Link to="/">
                        ГЛАВНАЯ СТРАНИЦА
                    </Link>
                </Button>
            </div>
        </div>
    );
}

export default Contact;
