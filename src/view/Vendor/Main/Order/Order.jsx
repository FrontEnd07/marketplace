import React from 'react';
import style from "./Oreder.module.scss"
import { LField } from "@components/Form"
import { Button } from "@components/Buttons"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
    Name: yup.string().required("empty"),
    Phone: yup.string().required("empty"),
});

const Order = () => {

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm({
        mode: "onBlur",
        resolver: yupResolver(schema),
    });

    const hendlersSubmit = (data) => {
        console.log(data)
    }

    return (
        <div className={style.main}>
            <div className={style.form}>
                <div>
                    <LField
                        register={register}
                        errors={errors}
                        id="Name"
                        name="Name"
                        type="text"
                        label="Ваше полное имя"
                        placeholder="Абдулло Абдурахимов" />
                </div>
                <div>
                    <LField
                        register={register}
                        errors={errors}
                        id="Phone"
                        name="Phone"
                        type="text"
                        label="Ваш номер телефон"
                        placeholder="(93) 500 50 50" />
                </div>
            </div>
            <div className={style.button}>
                <Button onClick={handleSubmit(hendlersSubmit)}>
                    ЗАКАЗАТЬ
                </Button>
            </div>
        </div>
    );
};

export default Order;
