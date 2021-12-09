import React from 'react';
import style from "./Product.module.scss";
import Sku from "./Components/Sku/Sku";
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper.scss';
import 'swiper/modules/pagination/pagination.scss';

import SwiperCore, {
    Pagination
} from 'swiper';

SwiperCore.use([Pagination]);

const Product = () => {
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
                    <Sku />
                </div>
            </div>
        </div>
    );
};

export default Product;
