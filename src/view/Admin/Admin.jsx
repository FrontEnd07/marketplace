import React from 'react';
import style from "./Admin.module.scss";
import { Routes, Route } from "react-router-dom";
import { Login, Main } from "./index"

export const Admin = () => <div>
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
    </Routes>
</div>

