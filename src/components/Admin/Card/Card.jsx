import React from 'react';
import style from "./Card.module.scss";


export const Card = ({ data }) => <div className={style.main}>
    <p>{data.title}</p>
    {data.list.map((el, i) => <div key={i} className={style.card}>
        <div>
            <img src={el.image} alt="Торт “Пинки”" />
        </div>
        <div>
            <div>
                <p>{el.info.title}</p>
                <p>{el.info.desc}</p>
            </div>
            <div>
                <span>{el.info.view}</span>
            </div>
        </div>
    </div>
    )}
</div>


