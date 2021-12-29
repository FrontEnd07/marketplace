import React from 'react';
import style from "./Order.module.scss";
import Header from '@view/Header'
import { NavLink, Routes, Route } from "react-router-dom";
import { Delivery, List } from "./index";

const Order = () => {
    return (
        <div className={style.main}>
            <Header appClassName={style.AMain} />
            <div className={style.role}>
                {[{ name: "Новые заказы", link: '/admin/order' }, { name: "Доставленные", link: '/admin/order/delivery' }].map((el, i) => <NavLink
                    key={i}
                    to={el.link}
                    className={({ isActive }) =>
                        isActive ? style.active : ""
                    }
                    end>
                    {el.name}
                </NavLink>
                )}
            </div>
            <Routes>
                <Route path="/" element={<List />} />
                <Route path="/delivery" element={<Delivery />} />
            </Routes>
        </div>
    );
}

export default Order;
