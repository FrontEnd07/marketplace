import React, { lazy } from 'react';
import style from "./Main.module.scss";
import Card from "@components/Vendor/Card";

// const Header = lazy(() => import("@components/Vendor/Header"));
// const Card = lazy(() => import("@components/Vendor/Card"));

const Main = () => {
    const hit =
    {
        title: "ХИТ ПРОДАЖИ",
        el: [
            {
                image: "https://static.1000.menu/img/content-v2/7d/58/35028/tort-natasha-klassicheskii-sovetskogo-vremeni_1615992726_22_max.jpg",
                title: "Торт \"Пинки\"",
                desc: "Малина, крем чиз, джем...",
                price: 70,
                weight: true,
                currency: "смн"
            },
            {
                image: "https://static.1000.menu/img/content-v2/7d/58/35028/tort-natasha-klassicheskii-sovetskogo-vremeni_1615992726_22_max.jpg",
                title: "Торт \"Пинки\"",
                desc: "Малина, крем чиз, джем...",
                price: 70,
                weight: true,
                currency: "смн"
            },
            {
                image: "https://static.1000.menu/img/content-v2/7d/58/35028/tort-natasha-klassicheskii-sovetskogo-vremeni_1615992726_22_max.jpg",
                title: "Торт \"Пинки\"",
                desc: "Малина, крем чиз, джем...",
                price: 70,
                weight: true,
                currency: "смн"
            },
            {
                image: "https://static.1000.menu/img/content-v2/7d/58/35028/tort-natasha-klassicheskii-sovetskogo-vremeni_1615992726_22_max.jpg",
                title: "Торт \"Пинки\"",
                desc: "Малина, крем чиз, джем...",
                price: 70,
                weight: true,
                currency: "смн"
            },
            {
                image: "https://static.1000.menu/img/content-v2/7d/58/35028/tort-natasha-klassicheskii-sovetskogo-vremeni_1615992726_22_max.jpg",
                title: "Торт \"Пинки\"",
                desc: "Малина, крем чиз, джем...",
                price: 70,
                weight: true,
                currency: "смн"
            }
        ]

    };

    const discount = {
        title: "ВЫГОДНАЯ ПОКУПКА",
        el: [
            {
                image: "https://static.1000.menu/img/content-v2/7d/58/35028/tort-natasha-klassicheskii-sovetskogo-vremeni_1615992726_22_max.jpg",
                title: "Торт \"Пинки\"",
                desc: "Малина, крем чиз, джем...",
                price: 70,
                discount: "90%",
                weight: true,
                currency: "смн"
            },
            {
                image: "https://static.1000.menu/img/content-v2/7d/58/35028/tort-natasha-klassicheskii-sovetskogo-vremeni_1615992726_22_max.jpg",
                title: "Торт \"Пинки\"",
                desc: "Малина, крем чиз, джем...",
                price: 70,
                discount: "90%",
                weight: true,
                currency: "смн"
            },
            {
                image: "https://static.1000.menu/img/content-v2/7d/58/35028/tort-natasha-klassicheskii-sovetskogo-vremeni_1615992726_22_max.jpg",
                title: "Торт \"Пинки\"",
                desc: "Малина, крем чиз, джем...",
                price: 70,
                discount: "90%",
                weight: true,
                currency: "смн"
            },
            {
                image: "https://static.1000.menu/img/content-v2/7d/58/35028/tort-natasha-klassicheskii-sovetskogo-vremeni_1615992726_22_max.jpg",
                title: "Торт \"Пинки\"",
                desc: "Малина, крем чиз, джем...",
                price: 70,
                discount: "90%",
                weight: true,
                currency: "смн"
            },
            {
                image: "https://static.1000.menu/img/content-v2/7d/58/35028/tort-natasha-klassicheskii-sovetskogo-vremeni_1615992726_22_max.jpg",
                title: "Торт \"Пинки\"",
                desc: "Малина, крем чиз, джем...",
                price: 70,
                discount: "90%",
                weight: true,
                currency: "смн"
            },
            {
                image: "https://static.1000.menu/img/content-v2/7d/58/35028/tort-natasha-klassicheskii-sovetskogo-vremeni_1615992726_22_max.jpg",
                title: "Торт \"Пинки\"",
                desc: "Малина, крем чиз, джем...",
                price: 70,
                discount: "90%",
                weight: true,
                currency: "смн"
            }
        ]
    }

    const all =
    {
        title: "ВСЕ СЛАДОСТИ",
        el: [
            {
                image: "https://static.1000.menu/img/content-v2/7d/58/35028/tort-natasha-klassicheskii-sovetskogo-vremeni_1615992726_22_max.jpg",
                title: "Торт \"Пинки\"",
                desc: "Малина, крем чиз, джем...",
                price: 70,
                weight: true,
                currency: "смн"
            },
            {
                image: "https://static.1000.menu/img/content-v2/7d/58/35028/tort-natasha-klassicheskii-sovetskogo-vremeni_1615992726_22_max.jpg",
                title: "Торт \"Пинки\"",
                desc: "Малина, крем чиз, джем...",
                price: 70,
                weight: true,
                currency: "смн"
            },
            {
                image: "https://static.1000.menu/img/content-v2/7d/58/35028/tort-natasha-klassicheskii-sovetskogo-vremeni_1615992726_22_max.jpg",
                title: "Торт \"Пинки\"",
                desc: "Малина, крем чиз, джем...",
                price: 70,
                weight: true,
                currency: "смн"
            },
            {
                image: "https://static.1000.menu/img/content-v2/7d/58/35028/tort-natasha-klassicheskii-sovetskogo-vremeni_1615992726_22_max.jpg",
                title: "Торт \"Пинки\"",
                desc: "Малина, крем чиз, джем...",
                price: 70,
                weight: true,
                currency: "смн"
            },
            {
                image: "https://static.1000.menu/img/content-v2/7d/58/35028/tort-natasha-klassicheskii-sovetskogo-vremeni_1615992726_22_max.jpg",
                title: "Торт \"Пинки\"",
                desc: "Малина, крем чиз, джем...",
                price: 70,
                weight: true,
                currency: "смн"
            }
        ]

    };
    return (
        <div className={style.main}>
            <div className={style.category}>
                {["Все", "Именной", "Праздничный", "Юбилейный", "Свадебный", "Детям", "Мужчинам", "Фруктовый", "Другое"].map((el, id) =>
                    <div className={`${id === 0 ? style.active : ""}`} key={id}>{el}</div>
                )}
            </div>
            <div className={style.list}>
                <div><Card data={hit} /></div>
                <div><Card data={discount} /></div>
                <div><Card data={all} /></div>
            </div>
        </div>
    );
}

export default Main;
