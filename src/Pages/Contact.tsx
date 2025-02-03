import React from "react";
import InputWrapper from "../Components/FormComponent/InputWrapper";

const Contact: React.FC = () => {
    return (
        <>
            <h1>Contact</h1>
            <label htmlFor="txtName">Name</label>
            <input
                type="tel"
                name=""
                id="txtName"
                className=""
                onChange={()=>{}}
            />

            <InputWrapper labelText={"Email"} type={"text"} id={"txtEmail"} />
            <br />
            <InputWrapper
                labelText={"Phone Number"}
                type={"tel"}
                id={"txtPhoneNumber"}
                className="text-danger bg-primary" />

        </>
    )
}

export default Contact;