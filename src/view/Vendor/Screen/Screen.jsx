import React from 'react';
import style from "./Screen.module.scss";
import Background from '@assets/Vendor/screen.svg';
import Logo from "@assets/Vendor/Logo.svg"
const Screen = () => {
    return (
        <div className={style.main} style={{ background: `url(${Background}) no-repeat center center fixed` }}>
            <img src={Logo} alt="" />
        </div>
    );
}

export default Screen;
