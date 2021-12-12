import React from 'react';
import style from "./Screen.module.scss";
import Background from '@assets/Vendor/screen.svg';
import Logo from "@assets/Vendor/Logo.svg"
const Screen = () => {
    return (
        <div className={style.main} style={{ backgroundImage: `url(${Background})` }}>
            <img src={Logo} alt="" />
        </div>
    );
}

export default Screen;
