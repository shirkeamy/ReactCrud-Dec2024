import React, { ChangeEvent } from "react";
import { IDropdownData } from "../../Utils/Interfaces";

interface IDropdownWrapperProps {
    id: string;
    label: string;
    selectedValue: string;
    optionData: IDropdownData[];
    onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
    validationText?: string;
}

const DropdownWrapper: React.FC<IDropdownWrapperProps> = (props: IDropdownWrapperProps) => {
    const { id, label, selectedValue, optionData, onChange, validationText }: IDropdownWrapperProps = props;
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <select name="" id={id} className="form-control"
                value={selectedValue}
                onChange={onChange}
            >
                <option value="0">Please Select</option>
                {
                    optionData.map((option: IDropdownData, index: number)=> (
                        <option key={`drp-${id}-${index}`} value={option.value}>{option.text}</option>
                    ))
                }
                
            </select>
            {
                validationText && 
                <p className="text-danger">{validationText}</p>
            }
        </>
    )
}

export default DropdownWrapper;