import { IEmployee, IEmployees } from "./Interfaces";

export const GetEmployees = async (): Promise<IEmployees[]> => {
    const response = await fetch("https://localhost:7196/api/employee");
    return response.json();
}

export const GetEmployee = async (employeeId: number): Promise<IEmployees> => {
    // const response = await fetch("https://localhost:7196/api/employee/employeeId?employeeId=" + employeeId);
    const response = await fetch(`https://localhost:7196/api/employee/employeeId?employeeId=${employeeId}`);

    return response.json();
}

export const InsertEmployee = async (employeeObj: IEmployee): Promise<number> => {
    const response = await fetch(`https://localhost:7196/api/employee`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(employeeObj)
    });

    const data = response?.json();
    if(response.ok){
        return data;
    }else{
        return 0;
    }
}


export const UpdateEmployee = async (employeeId: number,employeeObj: IEmployee): Promise<number> => {
    const response = await fetch(`https://localhost:7196/api/employee/employeeId?employeeId=${employeeId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(employeeObj)
    });

    const data = response?.json();
    if(response.ok){
        return data;
    }else{
        return 0;
    }
}

export const DeleteEmployee = async (employeeId: number): Promise<number> => {
    const response = await fetch(`https://localhost:7196/api/employee/employeeId?employeeId=${employeeId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    });

    const data = response.json();
    if(response.ok){
        return data;
    }else{
        return 0;
    }
}