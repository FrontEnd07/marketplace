import React from 'react';
import style from "./Button.module.scss";
import Loader from "@assets/Components/loader.svg";

export const Button = ({ children, appClassName, ...props }) => <button
    className={`${style.button} ${appClassName}`}
    {...props}
>
    {props.disabled ? <img src={Loader} alt="" /> : children}
</button>

