import React from 'react';
import style from './Main.module.scss'
import Header from '@view/Header'
import { Category } from "@components/Category";
import { Card } from "@components/Admin/Card"
import image from "@assets/Admin/milkygirl.png"
import { Button } from "@components/Buttons"

const Main = () => {

    const data = {
        title: "Популярные товары",
        list: [
            {
                image: image,
                info: {
                    title: "Торт “Пинки”",
                    desc: "Малина, крем чиз, джем...",
                    view: "Просмотрено: 392"
                }
            },
            {
                image: image,
                info: {
                    title: "Торт “Пинки”",
                    desc: "Малина, крем чиз, джем...",
                    view: "Просмотрено: 392"
                }
            },
            {
                image: image,
                info: {
                    title: "Торт “Пинки”",
                    desc: "Малина, крем чиз, джем...",
                    view: "Просмотрено: 392"
                }
            },
            {
                image: image,
                info: {
                    title: "Торт “Пинки”",
                    desc: "Малина, крем чиз, джем...",
                    view: "Просмотрено: 392"
                }
            },
            {
                image: image,
                info: {
                    title: "Торт “Пинки”",
                    desc: "Малина, крем чиз, джем...",
                    view: "Просмотрено: 392"
                }
            }
        ]
    }

    const AllItem = {
        title: "Все товары",
        list: [
            {
                image: image,
                info: {
                    title: "Торт “Пинки”",
                    desc: "Малина, крем чиз, джем...",
                    view: "Просмотрено: 392"
                }
            },
            {
                image: image,
                info: {
                    title: "Торт “Пинки”",
                    desc: "Малина, крем чиз, джем...",
                    view: "Просмотрено: 392"
                }
            },
            {
                image: image,
                info: {
                    title: "Торт “Пинки”",
                    desc: "Малина, крем чиз, джем...",
                    view: "Просмотрено: 392"
                }
            },
            {
                image: image,
                info: {
                    title: "Торт “Пинки”",
                    desc: "Малина, крем чиз, джем...",
                    view: "Просмотрено: 392"
                }
            },
            {
                image: image,
                info: {
                    title: "Торт “Пинки”",
                    desc: "Малина, крем чиз, джем...",
                    view: "Просмотрено: 392"
                }
            }
        ]
    }

    return (
        <div className={style.main}>
            <Header appClassName={style.AMain} />
            <div>
                <Category appClassName={style.category} data={["Все", "Именной", "Праздничный", "Юбилейный", "Свадебный", "Детям", "Мужчинам", "Фруктовый", "Другое"]} />
            </div>
            <div className={style.list}>
                <Card data={data} />
                <Card data={AllItem} />
            </div>
            <div className={style.button}>
                <div>
                    <Button>
                        Добавить
                    </Button>
                </div>
                <div>
                    <Button>
                        <span>Заказы</span>
                        <span>3</span>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Main;
