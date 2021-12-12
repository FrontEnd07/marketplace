import React from 'react';
import style from "./Sku.module.scss";

const Sku = ({ data }) => {

    return (
        <div className={style.main}>
            {data.map((el, id) => <div key={id} className={style.property}>
                <div className={style.title}>{el.title}</div>
                <ul className={`${style.list ? style.list : ""} ${el.variant[0].propImage ? style.propertyImage : ""}`}>
                    {el.variant.map((value, i) => <li key={i}>
                        <div>
                            {value.propImage
                                ? <div className={style.image}>
                                    <img src={value.propImage} alt={value.propName} />
                                </div>
                                : <span className={style.text}>{value.propName}</span>}
                        </div>
                    </li>
                    )}
                </ul>
                <ul className={style.options}>
                    {el.variant.map((value, i) =>
                        <React.Fragment key={i}>
                            {value.propImage &&
                                <li>{value.propName}</li>
                            }
                        </React.Fragment>
                    )}
                </ul>
            </div>
            )}
        </div >
    );
}

export default Sku;
