import React from 'react';
import style from './CardLogin.module.scss'

export const CardLogin = ({ name, children, appClassName }) => <div className={`${style.main} ${appClassName}`}>
    <p>{name}</p>
    {children}
</div>