import React, { useEffect, useState } from 'react';
import style from "./Vendor.module.scss";
import { Route, Routes } from "react-router-dom";
import Header from "@view/Header";
import { Product, Order, Contact, Success } from "@view/Vendor/Main/index"
import Screen from "@view/Vendor/Screen"
import Main from "@view/Vendor/Main";

const Vendor = () => {

    const [screen, setScreen] = useState(false)

    useEffect(() => {

        setTimeout(() => {
            setScreen(!screen)
        }, 3000)

        return () => { }
    }, [])

    if (!screen) return <Screen />

    return (
        <div className={style.main}>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/product" element={<Product />} />
                <Route path="/success" element={<Success />} />
                <Route path="/order" element={<Order />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    );
};

export default Vendor;
