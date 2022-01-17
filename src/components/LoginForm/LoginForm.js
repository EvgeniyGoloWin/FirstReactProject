import React, {useEffect, useState} from 'react';
import "./LoginForm.css"

function LoginForm(props) {

    const initialState = {
        name:'',
        password:'',
        forgot: '',
    }
    const [inputValues,setInputsValues] = useState(initialState)

    const handleChange = ()=>{
        setInputsValues()
    }
    useEffect(() => {

    }, [])
    

    return (
        <>
            <form className={"test"}>
                <input name={'name'} placeholder={"name"} value={initialState.name} onChange={handleChange}/>
                <input placeholder={"password"} value={initialState.password} onChange={handleChange}/>
                <input placeholder={"forgot"} value={initialState.forgot} onChange={handleChange}/>
                <button>Press</button>
            </form>
        </>
    );
}

export default LoginForm;