import React from 'react';
import style from "./Success.module.scss";
import { Button } from "@components/Buttons"
import { Link } from "react-router-dom";
import image from "@assets/Vendor/Success/success.svg";
import image2 from "@assets/Vendor/Success/successBottom.svg";

const Success = () => {
    return (
        <div className={style.main}>
            <div className={style.success}>
                <div className={style.image}>
                    <img src={image} alt="" />
                </div>
                <div className={style.user}>
                    <span className={style.name}>
                        АБДУЛЛО АБДУРАХИМОВ
                    </span>
                    <span>
                        Спасибо за ваш заказ!
                    </span>
                    <span>
                        Наш менеджер свяжется с вами!
                    </span>
                </div>
                <div className={style.image}>
                    <img src={image2} alt="" />
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
};

export default Success;
