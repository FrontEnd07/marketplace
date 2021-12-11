import React from 'react';
import style from './LField.module.scss';

export const LField = props => {

    const { errors, appClassName, label, type, ...rest } = props

    return <div className={`${style.field} ${appClassName ? appClassName : ""}`}>
        <div>
            <label htmlFor={rest.id}>{label}</label>
            <input
                type={type ? type : 'text'}
                {...rest}
            />
            {errors &&
                <>
                    {errors[rest.name] && <p>Укажите {label}</p>}
                </>
            }
        </div>
    </div>
}

