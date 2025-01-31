import { IEmployees } from "./Interfaces";

export const getAllEmployees = async (): Promise<IEmployees[]> => {
    const res = await fetch("https://localhost:7196/api/employeesdkfjhlakjds");
    return await res.json();
}