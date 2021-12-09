import React from 'react';
import style from "./Sku.module.scss";

const Sku = ({ data }) => {
    console.log(data)
    return (
        <div className={style.main}>
            Sku
        </div>
    );
}

export default Sku;
