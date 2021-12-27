import React from 'react';
import style from "./Login.module.scss";
import { CardLogin } from '@view/Admin/Components/CardLogin';
import { LField } from "@components/Form"
import { Button } from "@components/Buttons"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
    Phone: yup.string().required("empty"),
    Code: yup.number().integer().required("empty"),
});

const Login = () => {

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
            <div className={style.logo}>
                <span>OLOGOO</span>
                <span>BUSINESS</span>
            </div>
            <div className={style.form}>
                <CardLogin name="ТЕЛЕФОН">
                    <LField
                        register={register}
                        errors={errors}
                        id="Phone"
                        name="Phone"
                        type="text"
                        // label="Ваше полное имя"
                        placeholder="ТЕЛЕФОН" />
                </CardLogin>
                {/* <CardLogin name="СМС КОД">
                    <LField
                        register={register}
                        errors={errors}
                        id="Code"
                        name="Code"
                        type="text"
                        // label="Ваше полное имя"
                        placeholder="СМС КОД" />
                </CardLogin> */}
            </div>
            <div className={style.button}>
                <Button onClick={handleSubmit(hendlersSubmit)}>
                    ВХОД
                </Button>
            </div>
        </div>
    );
}

export default Login;
