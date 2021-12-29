import React from 'react';
import style from "./Admin.module.scss";
import { Routes, Route } from "react-router-dom";
import { Login, Main, Order, Create } from "./index"

export const Admin = () => <div>
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/order/*" element={<Order />} />
        <Route path="/create" element={<Create />} />
    </Routes>
</div>

