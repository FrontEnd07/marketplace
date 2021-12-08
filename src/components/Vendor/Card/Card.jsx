import React from 'react';
import style from "./Card.module.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

const Card = ({ data }) => {
    return (
        <div className={style.main}>
            <div className={style.header}>
                <div>
                    <h1>{data.title}</h1>
                </div>
                <div>
                    <h1>Все</h1>
                </div>
            </div>
            <Swiper spaceBetween={9} className={style.list} slidesPerView="2.30" freeMode={true}>
                {data.el.map((el, id) => <SwiperSlide className={style.card} key={id}>
                    <div className={style.image}>
                        <img src={el.image} alt="" />
                        {el.discount &&
                            <div className={style.discount}>-{el.discount}</div>
                        }
                    </div>
                    <div className={style.dscr}>
                        <div className={style.title}>{el.title}</div>
                        <div className={style.desc}>{el.desc}</div>
                        <div className={style.price}>
                            {el.price} {el.currency} {el.weight && "/ кг"}
                        </div>
                    </div>
                </SwiperSlide>)}
            </Swiper>
        </div>
    );
};
export default Card;
