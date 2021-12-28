import React from 'react';
import style from "./Category.module.scss";

export const Category = ({ data, appClassName = "" }) => <div className={`${style.main} ${appClassName}`}>
    {data.map((el, id) =>
        <div className={`${id === 0 ? style.active : ""}`} key={id}>{el}</div>
    )}
</div>

