import React from 'react';
import style from './Main.module.scss'
import Header from '@view/Header'
import { Category } from "@components/Category";

const Main = () => {
    return (
        <div className={style.main}>
            <Header appClassName={style.AMain} />
            <div>
                <Category appClassName={style.category} data={["Все", "Именной", "Праздничный", "Юбилейный", "Свадебный", "Детям", "Мужчинам", "Фруктовый", "Другое"]} />
            </div>
            <div className={style.list}>
                
            </div>
        </div>
    );
}

export default Main;
