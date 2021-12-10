import React, { useState } from 'react';
import style from "./Datepicker.module.scss";
import ru from 'date-fns/locale/ru';
import subDays from "date-fns/subDays";
import Union from "@assets/Vendor/Product/Union.svg"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export const Datepicker = (props) => {
    const { title } = props
    const [startDate, setStartDate] = useState(new Date());
    return <div className={style.main}>
        <h1 className={style.title}>{title ? title : "Дата"}</h1>
        <div className={style.data}>
            <DatePicker
                selected={startDate}
                className={style.dateInput}
                onChange={(date) => setStartDate(date)}
                timeInputLabel="Время:"
                showTimeInput
                minDate={subDays(new Date(), 0)}
                locale={ru}
                dateFormat="d MMMM yyyy p"
            />
            <img src={Union} className={style.union} alt="" />
        </div>
    </div>
}
