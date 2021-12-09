import React, { lazy } from 'react';
import style from "./Vendor.module.scss";
import { Route, Switch } from "react-router-dom";
import Header from "@components/Vendor/Header";

const Main = lazy(() => import("./Main"));
const Product = lazy(() => import("./Main/Product"));

const Vendor = () => {
    return (
        <div className={style.main}>
            <Header />
            <Switch>
                <Route exact path="/" render={() => <Main />} />
                <Route exact path="/product" render={() => <Product />} />
            </Switch>
        </div>
    );
};

export default Vendor;
