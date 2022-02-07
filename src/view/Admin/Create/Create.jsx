import React from 'react';
import style from "./Create.module.scss";
import { LField, File, Select, GRadio, MList, TSelect } from '@components/Form';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import loading from "@assets/Admin/Create/Component.png"
import Header from '@view/Header'
import { Button } from "@components/Buttons";

const schema = yup.object().shape({
    Name: yup.string().required("empty"),
    Desc: yup.string().required("empty"),
    Category: yup.object().required("Обязательная поля!"),
    Price: yup.string().required("Обязательная поля!"),
    Currency: yup.string().required("Обязательная поля!"),
    Discount: yup.string().required("Обязательная поля!"),
    Weight: yup.array().min(1, 'Выберите не менее одного предметов').required("Обязательная поля!"),
});

const Create = () => {

    const {
        register,
        control,
        setValue,
        formState: { errors },
        handleSubmit,
    } = useForm({
        mode: "onChange",
        resolver: yupResolver(schema),
    });

    const dataSelect = [
        { value: 1, label: "Категория" },
        { value: 2, label: "Женский" },
        { value: 3, label: "Мужской" },
        { value: 4, label: "Детский" },
    ]

    const weightSelect = [
        { value: 1, label: "22кг" },
        { value: 2, label: "2кг" },
        { value: 3, label: "3.5кг" },
        { value: 4, label: "1.5кг" },
    ]

    const radioOptions = [
        { label: "Фикс", value: "fix", checked: true },
        { label: "По кг", value: "kg" }
    ];

    const hendlersSubmit = (data) => {
        console.log(data)
    }

    return (
        <>
            <Header appClassName={style.AMain} />
            <div className={style.main}>
                <div className={style.image}>
                    <div>
                        <File />
                        <p>Можно добавить до 3 фото</p>
                    </div>
                    <ul>
                        {[loading, loading, loading].map((el, i) => <li key={i}>
                            <img src={el} alt="" />
                        </li>)}
                    </ul>
                </div>
                <div className={style.form}>
                    <div>
                        <LField
                            register={register}
                            errors={errors}
                            id="Name"
                            name="Name"
                            type="text"
                            placeholder="Названия торта" />
                    </div>
                    <div>
                        <LField
                            register={register}
                            errors={errors}
                            id="Desc"
                            name="Desc"
                            type="text"
                            placeholder="Описания торта" />
                    </div>
                    <div>
                        <Select
                            placeholder="Категория"
                            appClassName={style.classLetterSelect}
                            name="Category"
                            options={dataSelect}
                            errors={errors}
                            control={control}
                        />
                    </div>
                    <div className={style.price}>
                        <p>Цена:</p>
                        <GRadio
                            appClassName={style.GRadio}
                            name="Price"
                            options={radioOptions}
                            inputRef={register} />
                    </div>
                    <div className={style.DPrice}>
                        <div>
                            <LField
                                appClassName={style.LFeild}
                                register={register}
                                errors={errors}
                                id="Currency"
                                name="Currency"
                                type="text"
                                placeholder="Сомони / кг" />
                        </div>
                        <div>
                            <LField
                                appClassName={style.LFeild}
                                register={register}
                                errors={errors}
                                id="Discount"
                                name="Discount"
                                type="text"
                                placeholder="Скидка" />
                        </div>
                    </div>
                    <div>
                        <MList
                            placeholder="Доступные объемы"
                            name="Weight"
                            options={weightSelect}
                            errors={errors}
                            control={control}
                            setValue={setValue}
                        />
                    </div>
                    <div>
                        <TSelect
                            errors={errors}
                            title="Доступные начинки к торту"
                            name={"classesStatusSelect"} />
                    </div>
                    {/* <div>
                        <TSelect
                            errors={errors}
                            title="Декоративные оформлении к торту"
                            name={"classesStatusSelect1"} />
                    </div> */}
                </div>
                <div className={style.button}>
                    <Button onClick={handleSubmit(hendlersSubmit)}>
                        Создать
                    </Button>
                    <Button>
                        Отмена
                    </Button>
                </div>
            </div>
        </>

    );
}

export default Create;
