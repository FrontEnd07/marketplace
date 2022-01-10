import React from 'react';
import style from "./Header.module.scss"
import { Link } from "react-router-dom";
import img from "@assets/Vendor/Header/Logo.svg"
import {
    useLocation,
    useNavigate
} from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const Header = ({ appClassName = '' }) => {

    const { pathname } = useLocation();
    const navigate = useNavigate();

    return (
        <div className={`${style.main} ${appClassName}`}>
            <div className={style.logo}>
                {pathname === "/" || pathname === "/admin/main" ? <Link to="/">
                    <img src={img} alt="логотип" />
                </Link> : <BiArrowBack onClick={() => navigate(-1)} />}
            </div>
            <div className={style.contact}>
                <Link to="/contact">
                    Контакты
                </Link>
            </div>
        </div>
    );
};

export default Header;
