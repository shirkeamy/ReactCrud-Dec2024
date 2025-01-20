import React, { useEffect, useState } from "react";
import EmployeeList from "../Components/Employee/EmployeeList";
import EmployeeEdit from "../Components/Employee/EmployeeEdit";
import { IEmployees } from "../Utils/Interfaces";
import { GetEmployee } from "../Utils/EmployeeServices";

const EmployeeMaster: React.FC = () => {

    const [isEditMode, setIsEditMode] = useState<boolean>(false);

    const initalEmployeeData: IEmployees = {
        employeeId: 0,
        firstName: "",
        middleName: "",
        lastName: "",
        dateOfBirth: new Date(),
        isActive: false,
        emailId: "",
        countryId: 0,
        stateId: 0,
        cityId: 0,
        address: ""
    }
    const [employeeId, setEmployeeId] = useState<number>(0);
    const [employeeData, setEmployeeData] = useState<IEmployees>(initalEmployeeData);

    useEffect(()=>{
        if(employeeId>0){
            GetEmployee(employeeId).then((data: IEmployees)=>{
                setEmployeeData(data);
            }).catch(()=>{
                setEmployeeData(initalEmployeeData);
            })
        }else{
            setEmployeeData(initalEmployeeData);
        }
    },[employeeId])

    return (
        <>
            <h1>Employee Master</h1>
            
            {
                isEditMode ?
                <EmployeeEdit editData={employeeData} /> :
                <EmployeeList setIsEditMode={setIsEditMode} setEmployeeId={setEmployeeId} />
            }
            
            
        </>
    )
} 
export default EmployeeMaster;