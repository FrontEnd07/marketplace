import React from 'react';
import style from "./Success.module.scss";
import { Button } from "@components/Buttons"
import { Link } from "react-router-dom";
const Success = () => {
    return (
        <div className={style.main}>
            <div className={style.success}>

            </div>
            <div className={style.button}>
                <Button>
                    <Link to="/">
                        ГЛАВНАЯ СТРАНИЦА
                    </Link>
                </Button>
            </div>
        </div>
    );
};

export default Success;
