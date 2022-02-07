import React from 'react';
import style from './LField.module.scss';
import InputMask from "react-input-mask";

export const LField = props => {

    const { mask, errors, appClassName, register, label, type, ...rest } = props

    return <div className={`${style.field} ${appClassName ? appClassName : ""}`}>
        <div>
            {label && <label htmlFor={rest.id}>{label}</label>}
            {mask ? <InputMask
                mask={mask ? mask : ""}
                type={type ? type : 'text'}
                {...register ? register(rest.name) : null}
                {...rest}
                style={{ borderBottom: rest.name ? errors[rest.name] && '1px solid #FF3333' : '' }}
            /> : <input
                type={type ? type : 'text'}
                {...register ? register(rest.name) : null}
                {...rest}
                style={{ borderBottom: rest.name ? errors[rest.name] && '1px solid #FF3333' : '' }}
            />}

            {errors &&
                <>
                    {errors[rest.name] && <p style={{
                        color: errors[rest.name] && '#FF3333'
                    }}>Поле не должно быть пустым!</p>}
                </>
            }
        </div>
    </div>
}

