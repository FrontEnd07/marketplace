import React from 'react';
import style from "./Select.module.scss";
import { BsFillCaretDownFill } from "react-icons/all";
import SelectLib, { components } from 'react-select'
import { Controller } from "react-hook-form";

const DropdownIndicator = props => {
    return (
        <components.DropdownIndicator {...props}>
            <BsFillCaretDownFill />
        </components.DropdownIndicator>
    );
};

export const Select = ({
    appClassName,
    name,
    control,
    options,
    placeholder = "",
    errors,
    disabled,
}) => {
    const colourStyles = {
        control: (provided, state) => ({
            ...provided,
            border: 'none',
            borderBottom: !errors[name] ? "1px solid #DADADA" : "1px solid rgb(255, 51, 51)",
            borderRadius: "none",
            boxShadow: 'none',
        }),
        indicatorSeparator: (provided, state) => ({
            ...provided,
            display: 'none'
        }),
        menu: (provided, state) => ({
            ...provided,
            inset: "auto",
            ":active": {
                backgroundColor: "none"
            }
        }),
        valueContainer: (provided, state) => ({
            ...provided,
            padding: "0px"
        }),
        menuList: (provided, state) => ({
            ...provided,
            ":hover": {
                backgroundColor: "none"
            }
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? "#ebfaff" : "inherit",
            color: "#000000",
        })
    }
    return (
        <div className={`${style.main} ${appClassName}`}>
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <SelectLib
                        {...field}
                        options={options}
                        styles={colourStyles}
                        components={{ DropdownIndicator }}
                        placeholder={placeholder}
                        isSearchable={false}
                    />
                )}
            />
            {errors[name] && <p>{errors[name].message}</p>}
        </div>
    );
};