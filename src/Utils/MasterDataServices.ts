import { IContries } from "./Interfaces";

export const getContries = async (): Promise<IContries[]> => {

    const result = await fetch("https://localhost:7196/api/master-data/countries");

    return result.json()
}