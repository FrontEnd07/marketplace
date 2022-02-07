import React from 'react';
import style from "./Card.module.scss";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import 'swiper/swiper.scss';

import SwiperCore, {
    FreeMode
} from 'swiper';

SwiperCore.use([FreeMode]);

const Card = ({ data }) => <div className={style.main}>
    <Swiper spaceBetween={9} className={style.list} slidesPerView="2.30" freeMode={true}>
        {data.map((el, id) => <SwiperSlide className={style.card} key={id}>
            <Link to="/product" className={style.image}>
                <img src={el.image} alt="" />
                {el.discount &&
                    <div className={style.discount}>-{el.discount}</div>
                }
            </Link>
            <div className={style.dscr}>
                <div className={style.title}>{el.title}</div>
                <div className={style.desc}>{el.description}</div>
                <div className={style.price}>
                    {el.base_price} / кг
                </div>
            </div>
        </SwiperSlide>)}
    </Swiper>
</div>

export default Card;
