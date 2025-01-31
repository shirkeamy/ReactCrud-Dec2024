import React, { useEffect } from "react";
import { getAllEmployees } from "../Utils/EmployeesServices";
import { IEmployees } from "../Utils/Interfaces";

const Home: React.FC = () => {

    useEffect(()=>{
        getAllEmployees()
            .then((data: IEmployees[])=>{
                console.log("data", data)
            })
            .catch((error)=>{
                console.error("Error from home page:", error);
            })
    }, [])
    
    return (
        <>
            <h1>Home</h1>
        </>
    )
}

export default Home;