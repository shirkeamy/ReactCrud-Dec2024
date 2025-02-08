import React, { useState } from "react";
import InputWrapper from "../Components/FormComponents/InputWrapper";
import { InputType } from "../Utils/Enum";

const Login: React.FC = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2>Login Page</h2>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-md-12">
                    <form>
                        <div className="row">
                            <div className="form-group">
                                <InputWrapper
                                    title={"User Name"}
                                    type={InputType.Text}
                                    name={""}
                                    id={"txtUserName"}
                                    value={userName}
                                    onChange={(event)=>{
                                        setUserName(event.target.value)
                                    }}
                                />
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="form-group">
                                <InputWrapper
                                    title={"Password"}
                                    type={InputType.Password}
                                    name={""}
                                    id={"txtPassword"}
                                    value={password}
                                    onChange={(event)=>{
                                        setPassword(event.target.value)
                                    }}
                                />
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-12">
                                <input type="submit" value="Login" className="btn btn-primary" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;