import React, { useEffect } from "react";
import { getAllEmployees } from "../Utils/EmployeesServices";
import { IEmployees } from "../Utils/Interfaces";
import "./style.css";

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
            <h1 className="home-heading-1">Home</h1>
        </>
    )
}

export default Home;