import React from 'react';
import style from "./Product.module.scss";
import Sku from "./Components/Sku";
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper.scss';
import 'swiper/modules/pagination/pagination.scss';

import SwiperCore, {
    Pagination
} from 'swiper';

SwiperCore.use([Pagination]);

const Product = () => {
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
            <div className={style.slide}>
                <Swiper pagination={true}>
                    {["https://static.1000.menu/img/content-v2/7d/58/35028/tort-natasha-klassicheskii-sovetskogo-vremeni_1615992726_22_max.jpg", "https://static.1000.menu/img/content-v2/7d/58/35028/tort-natasha-klassicheskii-sovetskogo-vremeni_1615992726_22_max.jpg", "https://static.1000.menu/img/content-v2/7d/58/35028/tort-natasha-klassicheskii-sovetskogo-vremeni_1615992726_22_max.jpg"].map((el, id) => <SwiperSlide key={id}>
                        <img className={style.image} src={el} alt="" />
                    </SwiperSlide>)}
                </Swiper>
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
            </div>
        </div>
    );
};

export default Product;
