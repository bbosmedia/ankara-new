import React from 'react'
import { useState } from 'react';
import {useDispatch } from 'react-redux'
import {changeRegister, updateAccesToken} from '../../redux/ChangeRegister';
import axios from "axios";

const Login = ({changeLogin}) => {
    const [sentcode, setSentcode] = useState(false)
    const [sentbutton, setSentbutton]= useState(true)
    const [enterbutton, setEnterbutton]= useState(true)
    const [phone, setPhone] = useState('');
    const [entercode, setEntercode] = useState('');
    const dispatch = useDispatch();

    const changePhoneNumber = (e) =>{
        var str = e.target.value;
        setPhone(str)
        str = str.replace(/ /g, "");
        str = str.replace(/[&\/\\#,+()$~%.'":*?<>{}-]/g, '');
        str = parseInt(str)
        if(str.toString().length === 12){
            if(Number.isInteger(str)){
            setSentbutton(false);
        }else{
            setSentbutton(true);
        }

        if(str.toString().slice(0,3) !== '998'){
            setSentbutton(true);
        }
    }}

    const changeEnterCode = (e) =>{
        var str = e.target.value;

            setEntercode(str)
            if(str.length === 6){
                if(Number.isInteger(parseInt(str))){
                    setEnterbutton(false);
                }else{
                    setEnterbutton(true);
                }
            }else{
                setEnterbutton(true);
            }
    } 

    const funsendcode = async() => {
        var str = phone
        str = str.replace(/ /g, "");
        str = str.replace(/[&\/\\#,+()$~%.'":*?<>{}-]/g, '');
        str = parseInt(str)
        if(sentbutton === false){
            setSentcode(true);
            try{
                var token = await axios.post('https://api.ankara.uz/login/get-code', {
                    phone: str.toString(),
                  })
                if(token.status === 200){
                    console.log(token.data);
                    setSentcode(true);
                }
            }catch(e){
                console.log(e);
                setSentcode(false);
            }
        }
    }

    const funcLogin = async() =>{
        var str = phone
        str = str.replace(/ /g, "");
        str = str.replace(/[&\/\\#,+()$~%.'":*?<>{}-]/g, '');
        str = parseInt(str)
        if(sentbutton === false){
            setSentcode(true);
            try{
                var token = await axios.post('https://api.ankara.uz/login/check-code', {
                    phone: str.toString(),
                    code: entercode.toString()
                  })
                if(token.status === 200){
                    console.log(token.data);
                    setPhone('');
                    setSentcode(false);
                    dispatch(updateAccesToken(token.data))
                    changeLogin();
                }
            }catch(e){
                console.log(e);
                setSentcode(false);
            }
        }
    }
    return (
        <>
            <div className="form-group">
            {sentcode === false && 
                     <>
                     <input id="auth-phone" type="phone" value={phone} onChange={changePhoneNumber} autoComplete="off"  placeholder="+998 97 123-45-67"  className={`${sentbutton ? 'form-control is-invalid' : 'form-control'}`} /> 
                     <div className="invalid-feedback">
                        Please enter your correct phone number
                     </div>
                     </>
                     }
                      {sentcode && <input id="auth-phone" type="text" value={phone} placeholder={phone} autocomplete="off" class="form-control" disabled="disabled" />}
                  </div>
                  {sentcode && 
                        <div>
                        <input id="auth-phone" type="num" value={entercode} onChange={changeEnterCode} autoComplete="off"  placeholder="123456"  className={`${enterbutton ? 'form-control is-invalid' : 'form-control'}`} /> 
                        <div className="invalid-feedback">
                            Please, enter correct code
                        </div>
                        </div>
                }
                   
                  <div className="form-group mt-4">
                      {sentcode === false && <button onClick={funsendcode} disabled={sentbutton} type="button" className="btn btn-danger ya-btn-red w-100">
                     Send code
                     </button>}
                     {sentcode && <button onClick={funcLogin} disabled={enterbutton} type="button" className="btn btn-danger ya-btn-red w-100">
                     Log In
                     </button>}
                  </div>
                  <div className="ya-ha-link"><a style={{cursor: 'pointer'}} onClick={()=>dispatch(changeRegister('register'))}>Register</a></div>
        </>
    )
}

export default Login;