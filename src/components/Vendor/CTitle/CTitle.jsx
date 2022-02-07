import React from 'react';
import style from "./CTitle.module.scss";

export const CTitle = ({ name, children, appClassName = "" }) => <div className={style.main}>
    <div className={`${style.header} ${appClassName}`}>
        <div>
            <h1>{name}</h1>
        </div>
        <div>
            <h1>Все</h1>
        </div>
    </div>
    {children}
</div>
