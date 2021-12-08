import React from 'react';
import style from "./Card.module.scss";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper.scss';

const Card = ({data}) => {
    return (
        <div className={style.main}>
            <div className={style.header}>
                <div><h1>{data.title}</h1></div>
                <div><h1>Все</h1></div>
            </div>
            <Swiper freeMode={true}>
                {data.el.map((el, id) => <SwiperSlide key={id}>
                    <div className={style.image}>
                        <img src={el.image} alt=""/>
                    </div>
                    <div className={style.title}>{el.title}</div>
                    <div className={style.desc}>{el.desc}</div>
                    <div className={style.price}>{el.price} {el.weight && <div>/ кг</div>}</div>
                </SwiperSlide>)}
            </Swiper>
        </div>
    );
};
export default Card;
