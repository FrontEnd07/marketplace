import React, {lazy} from 'react';
import style from "./Vendor.module.scss";
// import {Order, Product, Success} from "./index";

const Header = lazy(() => import("@components/Vendor/Header"));
const Card = lazy(() => import("@components/Vendor/Card"));

const Vendor = () => {

    const data =
        {
            title: "ХИТ ПРОДАЖИ",
            el: [
                {
                    image: "https://static.1000.menu/img/content-v2/7d/58/35028/tort-natasha-klassicheskii-sovetskogo-vremeni_1615992726_22_max.jpg",
                    title: "Торт \"Пинки\"",
                    desc: "Малина, крем чиз, джем...",
                    price: 70,
                    weight: true,
                    currency: "TJS"
                },
                {
                    image: "https://static.1000.menu/img/content-v2/7d/58/35028/tort-natasha-klassicheskii-sovetskogo-vremeni_1615992726_22_max.jpg",
                    title: "Торт \"Пинки\"",
                    desc: "Малина, крем чиз, джем...",
                    price: 70,
                    weight: true,
                    currency: "TJS"
                },
                {
                    image: "https://static.1000.menu/img/content-v2/7d/58/35028/tort-natasha-klassicheskii-sovetskogo-vremeni_1615992726_22_max.jpg",
                    title: "Торт \"Пинки\"",
                    desc: "Малина, крем чиз, джем...",
                    price: 70,
                    weight: true,
                    currency: "TJS"
                },
                {
                    image: "https://static.1000.menu/img/content-v2/7d/58/35028/tort-natasha-klassicheskii-sovetskogo-vremeni_1615992726_22_max.jpg",
                    title: "Торт \"Пинки\"",
                    desc: "Малина, крем чиз, джем...",
                    price: 70,
                    weight: true,
                    currency: "TJS"
                },
                {
                    image: "https://static.1000.menu/img/content-v2/7d/58/35028/tort-natasha-klassicheskii-sovetskogo-vremeni_1615992726_22_max.jpg",
                    title: "Торт \"Пинки\"",
                    desc: "Малина, крем чиз, джем...",
                    price: 70,
                    weight: true,
                    currency: "TJS"
                }
            ]

        };

    return (
        <div className={style.main}>
            <Header/>
            <div className={style.category}>
                {["Все", "Именной", "Праздничный", "Юбилейный", "Свадебный", "Детям", "Мужчинам", "Фруктовый", "Другое"].map((el, id) =>
                    <div className={`${id == 0 ? style.active : ""}`} key={id}>{el}</div>
                )}
            </div>
            <div className={style.list}>
                <Card data={data}/>
            </div>
        </div>
    );
};

export default Vendor;
