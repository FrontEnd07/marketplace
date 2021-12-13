import React, { useEffect, useState } from 'react';
import style from "./Vendor.module.scss";
import { Route, Switch } from "react-router-dom";
import Header from "@components/Vendor/Header";
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
            <Switch>
                <Route exact path="/" render={() => <Main />} />
                <Route exact path="/product" render={() => <Product />} />
                <Route exact path="/success" render={() => <Success />} />
                <Route exact path="/order" render={() => <Order />} />
                <Route exact path="/contact" render={() => <Contact />} />
            </Switch>
        </div>
    );
};

export default Vendor;
