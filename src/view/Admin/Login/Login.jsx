import React, { useState, useEffect } from 'react';
import style from "./Login.module.scss";
import { CardLogin } from '@view/Admin/Components/CardLogin';
import { LField } from "@components/Form"
import { Button } from "@components/Buttons"
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { smsApi, loginApi } from '@http/Admin/Login/Login';
import * as yup from "yup";

const phone = yup.object().shape({
    Phone: yup.string().required("empty")
        .transform(value => value.replace(/\+992/g, '').replace(/\s.*?/g, '').replace(/\(/g, '').replace(/\)/g, '').replace(/-/g, '').replace(/_/g, ''))
        .min(9, "Name must contain at least 9 characters"),
});
const schema = phone.shape({
    Code: yup.number().integer().required("empty"),
});

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [smsCode, setSmsCode] = useState(false)
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm({
        mode: "onBlur",
        resolver: yupResolver(!smsCode ? phone : schema),
    });
    useEffect(() => {
        if (localStorage.getItem("jwtToken")) {
            return navigate("/admin/main")
        }
    }, [])
    const hendlersSubmit = (data) => {
        let payload = {
            phone: data.Phone
        }

        if (smsCode) {
            payload.code = data.Code
            dispatch(loginApi(payload)).then((res) => {
                if (res.data.token) {
                    localStorage.setItem('jwtToken', res.data.token)
                    return navigate("/admin/main");
                }
                console.log(res)
            })
        } else {
            dispatch(smsApi(payload)).then((res) => {
                if (res.data.message === "Verification code sent successfully") {
                    setSmsCode(true)
                    toast.success(res.data.message);
                } else {
                    toast.error(res.data.message)
                }
            })
        }
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
                        mask="+\9\92 (99) 999-99-99"
                        // label="Ваше полное имя"
                        placeholder="+992 (92) 909-09-04" />
                </CardLogin>
                {smsCode && <CardLogin name="СМС КОД">
                    <LField
                        register={register}
                        errors={errors}
                        id="Code"
                        name="Code"
                        type="text"
                        // label="Ваше полное имя"
                        placeholder="СМС КОД" />
                </CardLogin>}
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
