import React, { useEffect, useState } from "react";
import { IEmployees } from "../../Utils/Interfaces";
import { InsertEmployee, UpdateEmployee } from "../../Utils/EmployeeServices";

interface IEmployeeEditProps {
    editData: IEmployees;
    setIsEditMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const EmployeeEdit: React.FC<IEmployeeEditProps> = (props: IEmployeeEditProps) => {
    const { editData, setIsEditMode }: IEmployeeEditProps = props;
    const [employeeData, setEmployeeData] = useState<IEmployees>(editData);

    useEffect(() => {
        setEmployeeData(editData);
    }, [editData])

    const formatDate = (date: Date | undefined): string => {
        if(!date) return "";
        const year = date.getFullYear();
        const month = String(date.getMonth()+1).padStart(2,"0");
        const day = String(date.getDay()).padStart(2,"0");
        return `${year}-${month}-${day}`;
    }

    const handelOnSaveClick = () => {
        if(employeeData.employeeId > 0) {
            UpdateEmployee(employeeData.employeeId, employeeData)
                .then((data)=>{
                    if(data !== 0) {
                        alert("Record Update");
                        setIsEditMode(false);
                    }else {
                        alert("Record Not Update");
                    }
                })
        }else {
            InsertEmployee(employeeData)
                .then((data)=>{
                    if(data !== 0) {
                        alert("Record Saved");
                        setIsEditMode(false);
                    }else {
                        alert("Record Not Saved");
                    }
            })
        }
    }

    return (

        <>
            <h2 className="text-danger">Employee Edit</h2>
            <hr />
            <form action="">
                <div className="row">
                    <div className="col-4">
                        <label htmlFor="">Employee Id</label>
                        <span className="form-control">{editData.employeeId}</span>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-4">
                        <label htmlFor="">First Name</label>
                        <input type="text" name="" id="" className="form-control"
                            value={employeeData.firstName}
                            onChange={(e) => {
                                const { value } = e.target;
                                setEmployeeData(rest => (
                                    {
                                        ...rest,
                                        firstName: value
                                    }
                                ))
                            }}
                        />
                    </div>
                    <div className="col-4">
                        <label htmlFor="">Middle Name</label>
                        <input type="text" name="" id="" className="form-control"
                            value={employeeData.middleName}
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
                        <label htmlFor="">Last Name</label>
                        <input type="text" name="" id="" className="form-control"
                            value={employeeData.lastName}
                            onChange={(e) => {
                                const { value } = e.target;
                                setEmployeeData(rest => (
                                    {
                                        ...rest,
                                        lastName: value
                                    }
                                ))
                            }}
                        />
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-4">
                        <label htmlFor="">Date OF Birth</label>
                        <input type="date" name="" id="" className="form-control"
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
                        <div className="form-check">
                            <input type="radio" name="status" id=""
                                className="form-check-input"
                                checked={employeeData.isActive == true}
                                onChange={(e) => {
                                    setEmployeeData(rest => (
                                        {
                                            ...rest,
                                            isActive: true
                                        }
                                    ))
                                }}
                            />
                            <label htmlFor="status" className="form-check-label">Active</label>
                        </div>
                        <div className="form-check">
                            <input type="radio" name="status" id=""
                                className="form-check-input"
                                checked={employeeData.isActive == false}
                                onChange={(e) => {
                                    setEmployeeData(rest => (
                                        {
                                            ...rest,
                                            isActive: false
                                        }
                                    ))
                                }}
                            />
                            <label htmlFor="status" className="form-check-label">In Active</label>
                        </div>
                    </div>
                    <div className="col-4">
                        <label htmlFor="">Email Id</label>
                        <input type="email" name="" id="" className="form-control"
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
                        <label htmlFor="">Coutry</label>
                        <select name="" id="" className="form-control"
                            value={employeeData.countryId}
                            onChange={(e) => {
                                const { value } = e.target;
                                setEmployeeData(rest => (
                                    {
                                        ...rest,
                                        countryId: parseInt(value)
                                    }
                                ))
                            }}
                        >
                            <option value="0">Please Select</option>
                            <option value="1">India</option>
                            <option value="2">UK</option>
                            <option value="3">US</option>
                        </select>
                    </div>
                    <div className="col-4">
                        <label htmlFor="">State</label>
                        <select name="" id="" className="form-control"
                            value={employeeData.stateId}
                            onChange={(e) => {
                                const { value } = e.target;
                                setEmployeeData(rest => (
                                    {
                                        ...rest,
                                        stateId: parseInt(value)
                                    }
                                ))
                            }}
                        >
                            <option value="0">Please Select</option>
                            <option value="1">Maharashtra</option>
                            <option value="2">Delhi</option>
                        </select>
                    </div>
                    <div className="col-4">
                        <label htmlFor="">City</label>
                        <select name="" id="" className="form-control"
                            value={employeeData.cityId}
                            onChange={(e) => {
                                const { value } = e.target;
                                setEmployeeData(rest => (
                                    {
                                        ...rest,
                                        cityId: parseInt(value)
                                    }
                                ))
                            }}
                        >
                            <option value="0">Please Select</option>
                            <option value="1">Pune</option>
                            <option value="2">Mumbai</option>
                        </select>
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