import React, {useState} from 'react';
import './LoginForm.css'

const LoginForm = () => {

    const [state, setState] = useState({
        name: '',
        password: '',
    })
    console.log(state)


    const handlePress  = (e)=>{
        e.preventDefault()

    }
    const handleChangeInput = (e) => {
        setState({...state,  [e.target.name]:e.target.value})
    }

    return (
        <div className={'LoginFormWrapper'}>
            <form className={'registration'}>
                <h2>Welcome to my site</h2>
                <input name={"name"} value={state.name} onChange={(e)=> handleChangeInput(e)} type="name"/>
                <input name={"password"} value={state.password} onChange={(e)=> handleChangeInput(e)} type="password"/>
                <button onClick={(e)=> handlePress(e)} type='button'>Submit</button>
            </form>
        </div>
    );
};

export default LoginForm;