import React, { useCallback, useState, useEffect } from 'react';
import style from "./MList.module.scss";
import { BiPlus } from "react-icons/bi";
import SelectLib, { components } from 'react-select'
import { Controller } from "react-hook-form";

const DropdownIndicator = props => {
    return (
        <components.DropdownIndicator {...props}>
            <BiPlus />
        </components.DropdownIndicator>
    );
};

const SelectedValuesContainer = ({ isDisabled, getValue, ...props }) => {
    const { getOptionValue, formatOptionLabel, removeValue } = props.selectProps;

    const getValueLabel = (opt) => formatOptionLabel?.(opt, "value") || opt.label;
    const getKey = (opt, index) => `${getOptionValue(opt)}-${index}`;

    const toMultiValue = (opt, index) => (
        <components.MultiValue
            getValue={getValue}
            {...props}
            components={{
                Container: components.MultiValueContainer,
                Label: components.MultiValueLabel,
                Remove: components.MultiValueRemove
            }}
            //isFocused={isOptionFocused}
            isDisabled={isDisabled}
            key={getKey(opt, index)}
            index={index}
            removeProps={{
                onClick: () => removeValue(opt),
                onTouchEnd: () => removeValue(opt),
                onMouseDown: (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                }
            }}
            data={opt}
        >
            {getValueLabel(opt)}
        </components.MultiValue>
    );

    return (
        <div style={{ margin: ".5rem 0", display: "flex", flexFlow: "row wrap" }}>
            {getValue().map(toMultiValue)}
        </div>
    );
};

const SelectContainer = ({
    children,
    className,
    innerProps,
    isFocused,
    ...commonProps
}) => {
    const selectContainerProps = {
        ...commonProps
    };

    return (
        <components.SelectContainer
            className={className}
            innerProps={innerProps}
            isFocused={isFocused}
            {...selectContainerProps}
        >
            {children}
            <SelectedValuesContainer {...commonProps} />
        </components.SelectContainer>
    );
};

export const MList = ({
    appClassName,
    name,
    control,
    options,
    placeholder = "",
    errors,
    setValue,
}) => {

    const [valueSelect, setValueSelect] = useState();

    const onChange = useCallback((newValue) => setValueSelect(newValue), []);

    const removeValue = useCallback(
        (removed) => setValueSelect(valueSelect.filter((v) => v.value !== removed.value)),
        [valueSelect]
    );

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

    useEffect(() => {
        setValue(name, valueSelect)
        return () => { }
    }, [valueSelect])

    return <div className={`${style.main} ${appClassName}`}>
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <SelectLib
                    {...field}
                    isMulti
                    value={valueSelect}
                    onChange={onChange}
                    removeValue={removeValue}
                    options={options}
                    styles={colourStyles}
                    controlShouldRenderValue={false}
                    components={{
                        SelectContainer,
                        DropdownIndicator
                    }}
                    placeholder={placeholder}
                    isSearchable={false}
                />
            )}
        />
        {errors[name] && <p>{errors[name].message}</p>}
    </div>
};
