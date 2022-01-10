import React from 'react';
import style from "./GRadio.module.scss";

export const GRadio = ({ name, options, inputRef, appClassName }) => <div className={`${style.main} ${appClassName}`}>
    {options.map((el, index) => <div key={index}>
        <label htmlFor={index}>
            <span>{el.label}</span>
        </label>
        <input
            id={index}
            name={name}
            type="radio"
            value={el.value}
            defaultChecked={el.checked && el.checked}
            {...inputRef(name)}
        />
    </div>)}
</div>

