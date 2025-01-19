import React, { useEffect, useState } from "react";
import { GetEmployees } from "../../Utils/EmployeeServices";
import { IEmployees } from "../../Utils/Interfaces";

const EmployeeList: React.FC = () => {

    const [employeeList, setEmployeeList] = useState<IEmployees[]>([]);

    useEffect(() => {
        GetEmployees()
            .then((data: IEmployees[]) => {
                setEmployeeList(data);
            }).catch(() => {
                setEmployeeList([]);
            })
    }, []);

    return (
        <>
            <div className="container">
                <h2>Employee List</h2>
                <hr />
                <table className="table table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>Employee Id</th>
                            <th>Employee Name</th>
                            <th>Address</th>
                            <th>Email</th>
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