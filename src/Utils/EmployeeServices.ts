import { IEmployees } from "./Interfaces";

export const GetEmployees = async (): Promise<IEmployees[]> => {
    const response = await fetch("https://localhost:7196/api/employee");
    return response.json();
}
