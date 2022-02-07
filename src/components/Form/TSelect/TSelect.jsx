import React, { useEffect, useState } from 'react';
import style from "./TSelect.module.scss";
import { BsFillCaretDownFill } from "react-icons/all";
import Img from "@assets/Admin/Create/1.jpg";

export const TSelect = ({ name, title, errors }) => {

    const [isToggle, setIsToggle] = useState(false)

    useEffect(() => {
        window.addEventListener("click", (e) => {
            if (!e.target.matches(`.${name}`)) {
                setIsToggle(false);
            }
        });
    }, [])

    return <div className={style.main}>
        <div className={`${name} ${style.SFeild} ${isToggle ? style.fieldSelectActiveToggle : ""}`} onClick={() => setIsToggle((prev) => !prev)}>
            <p className={`${name}`}>{title}</p>
            <BsFillCaretDownFill className={`${name}`} />
        </div>
        <div className={style.SList}>
            {["text", "text"].map((el, i) => <div key={i}>
                <img src={Img} alt={el} />
            </div>)}
        </div>

        {isToggle && <div className={style.SDown}>
            {["text", "text"].map((el, i) => <div key={i}>
                <div>
                    <img src={Img} alt={el} />
                </div>
                <span>{el}</span>
            </div>)}
        </div>}

        {/* {errors && <p>asd</p>} */}
    </div>
} 