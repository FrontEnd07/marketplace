import React from 'react';
import style from "./List.module.scss";
import image from "@assets/Admin/milkygirl.png"
import { BiUser, BiPhone, BiTimeFive, BiComment } from "react-icons/bi";

const List = () => {
    const data = [
        {
            image: image,
            info: {
                title: "Торт “Пинки”",
                price: "85 смн",
                desc: "Малина, крем чиз, джем...",
                date: "12 Декабр 2021",
            }
        },
        {
            image: image,
            info: {
                title: "Торт “Пинки”",
                price: "85 смн",
                desc: "Малина, крем чиз, джем...",
                date: "12 Декабр 2021",
                user: "Абдулло Абдурахимов",
                phone: "+992 92 900 50 50",
                wishes: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of"
            }
        },
        {
            image: image,
            info: {
                title: "Торт “Пинки”",
                price: "85 смн",
                desc: "Малина, крем чиз, джем...",
                date: "12 Декабр 2021",
            }
        },
    ]
    return (
        <div className={style.main}>
            {data.map((el, i) => <div key={i} className={style.list}>
                <div>
                    <img src={el.image} alt={el.info.title} />
                </div>
                <div>
                    <div className={style.title}>
                        <div>{el.info.title}</div>
                        <div>{el.info.desc}</div>
                    </div>
                    {el.info.user &&
                        <div className={style.user}>
                            <BiUser />
                            <div>{el.info.user}</div>
                        </div>
                    }
                    {el.info.phone &&
                        <div className={style.phone}>
                            <BiPhone />
                            <div>{el.info.phone}</div>
                        </div>
                    }
                    <div className={style.date}>
                        <BiTimeFive />
                        <div>{el.info.date}</div>
                    </div>
                    {el.info.wishes &&
                        <div className={style.wishes}>
                            <BiComment />
                            <div>{el.info.wishes}</div>
                        </div>
                    }
                </div>
            </div>
            )}
        </div>
    );
}

export default List;
