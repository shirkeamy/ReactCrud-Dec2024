import React, { FormEvent, useEffect, useState } from "react";
import { IContries, IEmployees } from "../../Utils/Interfaces";
import { InsertEmployee, UpdateEmployee } from "../../Utils/EmployeeServices";
import InputWrapper from "../FormComponents/InputWrapper";
import { InputType } from "../../Utils/Enum";
import CheckboxWrapper from "../FormComponents/CheckboxWrapper";
import DropdownWrapper from "../FormComponents/DropdownWrapper";
import { getContries } from "../../Utils/MasterDataServices";

interface IEmployeeEditProps {
    editData: IEmployees;
    setIsEditMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const EmployeeEdit: React.FC<IEmployeeEditProps> = (props: IEmployeeEditProps) => {
    const { editData, setIsEditMode }: IEmployeeEditProps = props;
    const [employeeData, setEmployeeData] = useState<IEmployees>(editData);
    const [contries, setContries] = useState<IContries[]>([]);

    const [error, setError] = useState<{ [key: string]: string }>({})

    useEffect(() => {
        setEmployeeData(editData);

        getContries()
            .then((result: IContries[]) => {
                console.log(result);
                setContries(result);
            })
            .catch((err: Error) => {
                console.log(err);
                setContries([]);
            })

    }, [editData])

    const validateData = () => {
        const newError: { [key: string]: string } = {};

        if (employeeData.firstName == "" || employeeData.firstName == null || employeeData.firstName == undefined) {
            newError.firstName = "First name is required."
        }

        if (!employeeData.lastName) {
            newError.lastName = "Last name is required."
        }

        if (employeeData.countryId === 0) {
            newError.countryId = "Country is required."
        }

        if (employeeData.stateId === 0) {
            newError.stateId = "State is required."
        }

        if (employeeData.cityId === 0) {
            newError.cityId = "City is required."
        }

        setError(newError);
        return Object.keys(newError).length === 0;
    }

    const formatDate = (date: Date | undefined): string => {
        if (!date) return "";
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    }

    const handelOnSaveClick = (e: FormEvent) => {
        e.preventDefault();
        if (validateData()) {
            if (employeeData.employeeId > 0) {
                UpdateEmployee(employeeData.employeeId, employeeData)
                    .then((data) => {
                        if (data !== 0) {
                            alert("Record Update");
                            setIsEditMode(false);
                        } else {
                            alert("Record Not Update");
                        }
                    })
            } else {
                InsertEmployee(employeeData)
                    .then((data) => {
                        if (data !== 0) {
                            alert("Record Saved");
                            setIsEditMode(false);
                        } else {
                            alert("Record Not Saved");
                        }
                    })
            }
        }
    }

    return (

        <>
            <h2 className="text-danger">Employee Edit</h2>
            <hr />
            <form action="">
                <div className="row">
                    <div className="col-4">
                        <InputWrapper
                            title={"Employee Id"}
                            type={InputType.Text}
                            name={""}
                            id={"employeeId"}
                            value={`${editData.employeeId}`}
                            isDisabled={true}
                        />

                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-4">
                        <InputWrapper
                            title={"First Name"}
                            type={InputType.Text}
                            name={""}
                            id={"firstName"}
                            value={`${employeeData.firstName}`}
                            onChange={(e) => {
                                const { value, id } = e.target;
                                setEmployeeData(rest => (
                                    {
                                        ...rest,
                                        firstName: value
                                    }
                                ))
                                setError({ ...error, [id]: "" })
                            }}
                            validationText={error.firstName}
                        />
                    </div>
                    <div className="col-4">
                        <InputWrapper
                            title={"Middle Name"}
                            type={InputType.Text}
                            name={""}
                            id={"middleName"}
                            value={`${employeeData.middleName}`}
                            onChange={(e) => {
                                const { value } = e.target;
                                setEmployeeData(rest => (
                                    {
                                        ...rest,
                                        middleName: value
                                    }
                                ))
                            }}
                        />
                    </div>
                    <div className="col-4">
                        <InputWrapper
                            title={"Last Name"}
                            type={InputType.Text}
                            name={""}
                            id={"lastName"}
                            value={`${employeeData.lastName}`}
                            onChange={(e) => {
                                const { value, id } = e.target;
                                setEmployeeData(rest => (
                                    {
                                        ...rest,
                                        lastName: value
                                    }
                                ))
                                setError({ ...error, [id]: "" })
                            }}
                            validationText={error.lastName}
                        />
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-4">
                        <InputWrapper
                            title={"Date of birth"}
                            type={InputType.Date}
                            name={""}
                            id={"dateOfBirth"}
                            value={formatDate(new Date(employeeData.dateOfBirth))}
                            onChange={(e) => {
                                const { value } = e.target;
                                setEmployeeData(rest => (
                                    {
                                        ...rest,
                                        dateOfBirth: new Date(value)
                                    }
                                ))
                            }}
                        />
                    </div>
                    <div className="col-4">
                        <label htmlFor="">Status</label>

                        <CheckboxWrapper
                            type={"radio"}
                            name={"status"}
                            id={"active"}
                            isChecked={employeeData.isActive == true}
                            label={"Active"}
                            onChange={(e) => {
                                setEmployeeData(rest => (
                                    {
                                        ...rest,
                                        isActive: true
                                    }
                                ))
                            }}
                        />

                        <CheckboxWrapper
                            type={"radio"}
                            name={"status"}
                            id={"inActive"}
                            isChecked={employeeData.isActive == false}
                            label={"In Active"}
                            onChange={(e) => {
                                setEmployeeData(rest => (
                                    {
                                        ...rest,
                                        isActive: false
                                    }
                                ))
                            }}
                        />
                    </div>
                    <div className="col-4">
                        <InputWrapper
                            title={"Email Id"}
                            type={InputType.Text}
                            name={""}
                            id={"emailId"}
                            value={employeeData.emailId}
                            onChange={(e) => {
                                const { value } = e.target;
                                setEmployeeData(rest => (
                                    {
                                        ...rest,
                                        emailId: value
                                    }
                                ))
                            }}
                        />
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-4">
                        <DropdownWrapper
                            id={"countryId"}
                            label={"Coutry"}
                            selectedValue={`${employeeData.countryId}`}
                            optionData={
                                contries.map((contry: IContries)=>({
                                    value: contry.countryId.toString(),
                                    text: contry.countryName
                                }))
                            }
                            onChange={(e) => {
                                const { value, id } = e.target;
                                setEmployeeData(rest => (
                                    {
                                        ...rest,
                                        countryId: parseInt(value)
                                    }
                                ))
                                setError({ ...error, [id]: "" });
                            }}
                            validationText={error.countryId}
                        />
                    </div>
                    <div className="col-4">
                        <DropdownWrapper
                            id={"stateId"}
                            label={"State"}
                            selectedValue={`${employeeData.stateId}`}
                            optionData={[{ text: "Maharashtra", value: "1" }, { text: "Delhi", value: "2" }]}
                            onChange={(e) => {
                                const { value, id } = e.target;
                                setEmployeeData(rest => (
                                    {
                                        ...rest,
                                        stateId: parseInt(value)
                                    }
                                ))
                                setError({ ...error, [id]: "" });
                            }}
                            validationText={error.stateId}
                        />
                    </div>
                    <div className="col-4">
                        <DropdownWrapper
                            id={"cityId"}
                            label={"City"}
                            selectedValue={`${employeeData.cityId}`}
                            optionData={[{ text: "Pune", value: "1" }, { text: "Mumbai", value: "2" }]}
                            onChange={(e) => {
                                const { value, id } = e.target;
                                setEmployeeData(rest => (
                                    {
                                        ...rest,
                                        cityId: parseInt(value)
                                    }
                                ))
                                setError({ ...error, [id]: "" });
                            }}
                            validationText={error.cityId}
                        />
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-6">
                        <label htmlFor="">Address</label>
                        <textarea name="" id="" cols={30} rows={5} className="form-control"
                            value={employeeData.address}
                            onChange={(e) => {
                                const { value } = e.target;
                                setEmployeeData(rest => (
                                    {
                                        ...rest,
                                        address: value
                                    }
                                ))
                            }}
                        ></textarea>
                    </div>
                </div>
                <hr />
                <div className="row text-center">
                    <div className="col 12">
                        <input type="button" value="Save" className="btn btn-primary"
                            onClick={handelOnSaveClick}
                        />
                    </div>
                </div>
            </form>
        </>

    )
}

export default EmployeeEdit;