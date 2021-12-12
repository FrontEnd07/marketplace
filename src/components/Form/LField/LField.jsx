import React from 'react';
import style from './LField.module.scss';

export const LField = props => {

    const { errors, appClassName, register, label, type, ...rest } = props

    return <div className={`${style.field} ${appClassName ? appClassName : ""}`}>
        <div>
            <label htmlFor={rest.id}>{label}</label>
            <input
                type={type ? type : 'text'}
                {...register ? register(rest.name) : null}
                {...rest}
                style={{ borderBottom: rest.name ? errors[rest.name] && '1px solid #FF3333' : '' }}
            />
            {errors &&
                <>
                    {errors[rest.name] && <p style={{
                        color: errors[rest.name] && '#FF3333'
                    }}>Укажите {label}</p>}
                </>
            }
        </div>
    </div>
}

