import { ICities, IContries, IStates } from "./Interfaces";

export const getContries = async (): Promise<IContries[]> => {

    const result = await fetch("https://localhost:7196/api/master-data/countries");

    return result.json()
}

export const getStates = async (): Promise<IStates[]> => {

    const result = await fetch("https://localhost:7196/api/master-data/states");

    return result.json()
}

export const getCities = async (): Promise<ICities[]> => {

    const result = await fetch("https://localhost:7196/api/master-data/cities");

    return result.json()
}