import React from 'react';
import style from "./Vendor.module.scss";
import { Route, Switch } from "react-router-dom";
import Header from "@components/Vendor/Header";
import Main from "./Main";
import Product from "./Main/Product";
import Order from "./Main/Order";

// import loadable from '@loadable/component';

// const Main = loadable(() => import("./Main"), {
//     fallback: <div>Main...</div>,
// });
// const Product = loadable(() => import("./Main/Product"), {
//     fallback: <div>Product...</div>,
// });

const Vendor = () => {
    return (
        <div className={style.main}>
            <Header />
            <Switch>
                <Route exact path="/" render={() => <Main />} />
                <Route exact path="/product" render={() => <Product />} />
                <Route exact path="/order" render={() => <Order />} />
            </Switch>
        </div>
    );
};

export default Vendor;
