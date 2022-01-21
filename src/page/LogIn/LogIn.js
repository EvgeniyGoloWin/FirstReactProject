import React from 'react';
import './LogIn.css'
import LoginForm from "../../components/LoginForm/LoginForm";

const LogIn = () => {
    return (
        <div className={"logIn__wrapper"}>
            <LoginForm/>
        </div>
    );
};

export default LogIn;