import React, { useState } from 'react';
import style from "./Product.module.scss";
import Sku from "./Components/Sku";
import { Datepicker } from "@components/Datepicker";
import { LField } from "@components/Form"
import { Button } from "@components/Buttons"
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import { useSpring, animated } from "react-spring";
import 'swiper/swiper.scss';
import 'swiper/modules/pagination/pagination.scss';

import SwiperCore, {
    Pagination
} from 'swiper';

SwiperCore.use([Pagination]);

const Product = () => {
    const [hideOnScroll, setHideOnScroll] = useState(true)
    useScrollPosition(
        ({ prevPos, currPos }) => {
            const isShow = currPos.y > -69
            // console.log(isShow)
            if (isShow !== hideOnScroll) setHideOnScroll(isShow)
        },
        [hideOnScroll]
    )

    const styles = useSpring({
        config: {
            // duration: 250,
            // frequency: 1
        },
        from: { transform: "translate3d(0px, -63px, 0px)" },
        to: { transform: `translate3d(0px, ${!hideOnScroll ? "0px" : "-63px"}, 0px)` },
    })

    const skuData = [
        {
            title: "Выберите подходящий вес",
            variant: [
                { propName: "1кг" },
                { propName: "1.5кг" },
                { propName: "2кг" },
                { propName: "2.5кг" },
                { propName: "3кг" }
            ]
        },
        {
            title: "Начинка торта",
            variant: [
                {
                    propName: "Грецкий орех",
                    propImage: "https://img.championat.com/s/735x490/news/big/q/n/chem-polezny-greckie-orehi_16143810901925572231.jpg"
                },
                {
                    propName: "Банан",
                    propImage: "https://www.gastronom.ru/binfiles/images/20151029/bddcbbce.jpg"
                },
                {
                    propName: "Киви",
                    propImage: "https://s9.travelask.ru/system/images/files/001/130/309/wysiwyg_jpg/fruit-frukty-kivi-miata.jpg?1534339094"
                },
            ]
        },
        {
            title: "Начинка торта",
            variant: [
                {
                    propName: "Цифра 5",
                    propImage: "https://img.championat.com/s/735x490/news/big/q/n/chem-polezny-greckie-orehi_16143810901925572231.jpg"
                },
                {
                    propName: "Картины \“Леди Баг\”",
                    propImage: "https://www.gastronom.ru/binfiles/images/20151029/bddcbbce.jpg"
                },
                {
                    propName: "Киви",
                    propImage: "https://s9.travelask.ru/system/images/files/001/130/309/wysiwyg_jpg/fruit-frukty-kivi-miata.jpg?1534339094"
                },
            ]
        }
    ]

    return (
        <div className={style.main}>
            <animated.div className={style.price} style={styles}>
                <div>
                    <div>
                        <img src="https://static.1000.menu/img/content-v2/7d/58/35028/tort-natasha-klassicheskii-sovetskogo-vremeni_1615992726_22_max.jpg" />
                    </div>
                    <div>
                        <span>Торт “Пинки”</span>
                    </div>
                </div>
                <div>
                    <span>185 смн</span>
                </div>
            </animated.div>
            <div className={style.slide}>
                <Swiper pagination={true}>
                    {["https://static.1000.menu/img/content-v2/7d/58/35028/tort-natasha-klassicheskii-sovetskogo-vremeni_1615992726_22_max.jpg", "https://static.1000.menu/img/content-v2/7d/58/35028/tort-natasha-klassicheskii-sovetskogo-vremeni_1615992726_22_max.jpg", "https://static.1000.menu/img/content-v2/7d/58/35028/tort-natasha-klassicheskii-sovetskogo-vremeni_1615992726_22_max.jpg"].map((el, id) => <SwiperSlide key={id}>
                        <img className={style.image} src={el} alt="" />
                    </SwiperSlide>)}
                </Swiper>
                <div className={style.price}>
                    <span>185 смн</span>
                </div>
            </div>
            <div className={style.content}>
                <div className={style.info}>
                    <div>
                        <h1>Торт “Пинки”</h1>
                    </div>
                    <div>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal.
                    </div>
                </div>
                <div className={style.sku}>
                    <Sku data={skuData} />
                </div>
                <div className={style.form}>
                    <div className={style.datepicker} >
                        <Datepicker />
                    </div>
                    <div className={style.wishes}>
                        <LField
                            id="wishes"
                            type="text"
                            label="Дополнительная информация"
                            placeholder="Опишите ваше пожелании..." />
                    </div>
                    <div className={style.button}>
                        <Button appClassName={style.link}>
                            <Link to="/order">
                                заказать
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
