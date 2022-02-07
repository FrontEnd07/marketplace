import React, { useEffect, useState } from 'react';
import style from "./Main.module.scss";
import Card from "@components/Vendor/Card";
import { CTitle } from "@components/Vendor/CTitle";
import { Category } from "@components/Category"
import { productsApi } from "@http/Vendor/Main"
import { useDispatch } from 'react-redux';

const Main = () => {

    const dispatch = useDispatch();
    const [data, setData] = useState(null)

    useEffect(() => {
        dispatch(productsApi()).then((res) => {
            console.log(res)
            setData(res)
        })
        return () => {

        }

    }, [])

    return (
        <div className={style.main}>
            <div>
                <Category data={["Все", "Именной", "Праздничный", "Юбилейный", "Свадебный", "Детям", "Мужчинам", "Фруктовый", "Другое"]} />
            </div>
            <div className={style.list}>
                <div>
                    <CTitle name="ХИТ ПРОДАЖИ">
                        {data ? <Card data={data.data.slice(0, 5)} /> : <div>Загрузка...</div>}
                    </CTitle>
                </div>
                <div>
                    <CTitle name="ВЫГОДНАЯ ПОКУПКА">
                        {data ? <Card data={data.data.slice(0, 5)} /> : <div>Загрузка...</div>}
                    </CTitle>
                </div>
                <div>
                    <CTitle name="ВСЕ СЛАДОСТИ">
                        {data ? <Card data={data.data.slice(0, 5)} /> : <div>Загрузка...</div>}
                    </CTitle>
                </div>
            </div>
        </div>
    );
}

export default Main;
