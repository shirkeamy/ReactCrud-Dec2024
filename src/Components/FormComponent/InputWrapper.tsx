import React from "react";

interface IInputWrapperProps {
    labelText: string;
    type: "text"|"tel"|"email";
    name?: string;
    id: string;
    className?: string;
    handleOnChnage?: React.ChangeEventHandler<HTMLInputElement>;
}

const InputWrapper: React.FC<IInputWrapperProps> = (props: IInputWrapperProps) => {
    
    const { name, type, labelText, id, className, handleOnChnage }: IInputWrapperProps = props;

    return (
        <>
            <label htmlFor={id}>{labelText}</label>
            <input
                type={type}
                name={name}
                id={id}
                className={`form-control ${className}`}
                onChange={handleOnChnage}
            />
        </>
    )
}

export default InputWrapper;