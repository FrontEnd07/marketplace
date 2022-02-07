import React, { useEffect } from 'react';
import style from "./Admin.module.scss";
import { Routes, Route } from "react-router-dom";
import { Login, Main, Order, Create } from "./index"
import { useNavigate } from 'react-router-dom';

export const Admin = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem("jwtToken")) {
            return navigate("/")
        }
        return () => { }
    }, [])
    return <div>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/main" element={<Main />} />
            <Route path="/order/*" element={<Order />} />
            <Route path="/create" element={<Create />} />
        </Routes>
    </div>
}

