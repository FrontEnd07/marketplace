import React from 'react';
import style from "./Oreder.module.scss"
import { LField } from "@components/Form"
import { Button } from "@components/Buttons"

const Order = () => {
    return (
        <div className={style.main}>
            <div className={style.form}>
                <div>
                    <LField
                        id="name"
                        type="text"
                        label="Ваше полное имя"
                        placeholder="Абдулло Абдурахимов" />
                </div>
                <div>
                    <LField
                        id="phone"
                        type="text"
                        label="Ваш номер телефон"
                        placeholder="(93) 500 50 50" />
                </div>
            </div>
            <div className={style.button}>
                <Button>
                    ЗАКАЗАТЬ
                </Button>
            </div>
        </div>
    );
};

export default Order;
