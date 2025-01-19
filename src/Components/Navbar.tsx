import React from "react";
import "./style.css";

const Navbar: React.FC = () => {
    return (
        <>
            <ul className="custom-nav">
                <li className="costom-list"><a href="/">Home</a></li>
                <li className="costom-list"><a href="about">About</a></li>
                <li className="costom-list"><a href="contact">Contact</a></li>
                <li className="costom-list"><a href="employee-master">Employee Master</a></li>
            </ul>
        </>
    )
}

export default Navbar;