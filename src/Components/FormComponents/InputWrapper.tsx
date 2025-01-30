import React, { ChangeEvent } from "react";
import { InputType } from "../../Utils/Enum";

interface IInputWrapperProps {
    title: string;
    // type: "text" | "password";
    type: InputType;
    name: string;
    id:string;
    className?: string;
    value: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>)=>void;
    isDisabled?: boolean;
    validationText?: string;
}

const InputWrapper: React.FC<IInputWrapperProps> = (props: IInputWrapperProps) => {
    const { title, type, id, name, className, value, onChange, isDisabled, validationText }: IInputWrapperProps = props;
    return (
        <>
            <label htmlFor={id}>{title}</label>
            <input type={type} name={name} id={id} className={`form-control ${className}`}
                value={value}
                onChange={onChange}
                disabled={isDisabled}
            />
            {
                validationText && 
                <p className="text-danger">{validationText}</p>
            }
        </>
    );
}

export default InputWrapper;