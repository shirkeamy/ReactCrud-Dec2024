import React, { useEffect, useState } from "react";
import { DeleteEmployee, GetEmployees } from "../../Utils/EmployeeServices";
import { IEmployees } from "../../Utils/Interfaces";

interface IEmployeeListProps {
    setIsEditMode: React.Dispatch<React.SetStateAction<boolean>>;
    setEmployeeId: React.Dispatch<React.SetStateAction<number>>;
}

const EmployeeList: React.FC<IEmployeeListProps> = (props: IEmployeeListProps) => {

    const { setIsEditMode, setEmployeeId }: IEmployeeListProps = props;
    const [employeeList, setEmployeeList] = useState<IEmployees[]>([]);

    function handleAddClick(){
        setIsEditMode(true);
        setEmployeeId(0);
    }

    useEffect(() => {
        GetEmployees()
            .then((data: IEmployees[]) => {
                setEmployeeList(data);
            }).catch(() => {
                setEmployeeList([]);
            })
    }, []);

    function handleOnEditClick(employeeId: number){
        setIsEditMode(true);
        setEmployeeId(employeeId);
    }    

    function handleOnDeleteClick(employeeId: number){
        DeleteEmployee(employeeId)
            .then((data)=>{
                console.log("data list",data)
                if(data>0){
                    alert("Record Deleted")
                }else{
                    alert("Record Not Deleted")
                }
            })
            .catch((err)=>{
                console.error(err);
                alert("Record Not Deleted");
            })
    }

    
    return (
        <>
            <div className="container">
                <h2>Employee List</h2>
                <hr />
                <input type="button" value="Add Employee" className="btn btn-primary" 
                    onClick={handleAddClick} />
                <hr />
                <table className="table table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>Employee Id</th>
                            <th>Employee Name</th>
                            <th>Address</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employeeList.map((employee: IEmployees) => {
                                return (
                                    <tr>
                                        <td>{employee.employeeId}</td>
                                        <td>{employee.firstName + ' ' + employee.middleName + ' ' + employee.lastName}</td>
                                        <td>{employee.address}</td>
                                        <td>{employee.emailId}</td>
                                        <td>
                                            <input type="button" value="Edit" className="btn btn-parimay btn-sm"
                                                onClick={()=>{
                                                    handleOnEditClick(employee.employeeId)
                                                }}
                                            />
                                            <input type="button" value="Delete" className="btn btn-danger btn-sm"
                                                onClick={()=>{
                                                    handleOnDeleteClick(employee.employeeId)
                                                }}
                                            />
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default EmployeeList;