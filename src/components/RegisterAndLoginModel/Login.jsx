import React from 'react'
import {useDispatch } from 'react-redux'
import {changeRegister} from '../../redux/ChangeRegister';

const Login = () => {
    const dispatch = useDispatch();
    return (
        <>
            <div className="form-group">
                     <input id="auth-phone" autoComplete="off" type="text" placeholder="+998 99 123-45-67"  className="form-control" /> 
                     <div className="invalid-feedback">
                        Please enter your phone number
                     </div>
                  </div>
                   
                  <div className="form-group mt-4">
                     <button type="button" className="btn btn-danger ya-btn-red w-100">
                     Send code
                     </button> 
                  </div>
                  <div className="ya-ha-link"><a style={{cursor: 'pointer'}} onClick={()=>dispatch(changeRegister('register'))}>Register</a></div>
        </>
    )
}

export default Login
