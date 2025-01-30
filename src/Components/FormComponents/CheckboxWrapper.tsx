import React, { ChangeEvent } from "react";

interface ICheckboxWrapperProps {
    type: "radio" | "checkbox";
    name: string;
    id: string;
    isChecked: boolean;
    label: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const CheckboxWrapper: React.FC<ICheckboxWrapperProps> = (props: ICheckboxWrapperProps) => {
    const {type, name, id, isChecked, label, onChange}: ICheckboxWrapperProps = props;
    return (
        <>
            <div className="form-check">
                <input type={type} name={name} id={id}
                    className="form-check-input"
                    checked={isChecked}
                    onChange={onChange}
                />
                <label htmlFor={id} className="form-check-label">{label}</label>
            </div>
        </>
    )
}

export default CheckboxWrapper;