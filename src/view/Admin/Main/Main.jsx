import React, { useState, useEffect } from 'react';
import style from './Main.module.scss'
import Header from '@view/Header'
import { Category } from "@components/Category";
import { Card } from "@components/Admin/Card"
import image from "@assets/Admin/milkygirl.png"
import { Button } from "@components/Buttons"
import { Link } from "react-router-dom"
import { useSpring, animated } from "react-spring";
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

const Main = () => {

    const [hideOnScroll, setHideOnScroll] = useState(true)

    useScrollPosition(
        ({ prevPos, currPos }) => {
            const isShow = currPos.y > prevPos.y
            if (isShow !== hideOnScroll) setHideOnScroll(isShow)
        },
        [hideOnScroll]
    )

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

    const styles = useSpring({
        config: {
            // duration: 250,
            // frequency: 1
        },
        from: { transform: "translate3d(0px, 0px, 0px)" },
        to: { transform: `translate3d(0px, ${!hideOnScroll ? "98px" : "0px"}, 0px)` },
    })

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
            <animated.div className={style.button} style={styles}>
                <div>
                    <Link to="/admin/create">
                        <Button>
                            Добавить
                        </Button>
                    </Link>
                </div>
                <div>
                    <Link to="/admin/order">
                        <Button>
                            <span>Заказы</span>
                            <span>3</span>
                        </Button>
                    </Link>
                </div>
            </animated.div>
        </div >
    );
}

export default Main;
