import React from 'react';

export const Lfield = (props) => {

    const { errors, icon, label, type, appClassName, ...rest } = props

    return <div className={`field ${appClassName}`}>
        <div>
            <label htmlFor={rest.id}>{label}</label>
            <input
                type={type ? type : 'text'}
                {...rest}
            />
            {errors[rest.name] && <p>Укажите {label}</p>}
        </div>
    </div>
}

