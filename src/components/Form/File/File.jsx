import React from 'react';
import style from "./File.module.scss";
import Plus from "@assets/Admin/Create/Plus.svg"

export const File = () => <div className={style.main}>
    <label htmlFor="file-upload" style={{ backgroundImage: `url(${Plus})` }}></label>
    <input id="file-upload" type="file" accept=".jpg,.jpeg" style={{ display: "none" }} />
</div>
