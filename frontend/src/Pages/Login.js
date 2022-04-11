import React , {useState} from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import './signup.css';

function Login ({setIsAdmin}) {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");


    async function handleClick(){
        if(email === "" || password === ""){return;}
       await axios.post('/api/login-user',{
            email:email,
            password:password,
        }).then(response=>{
            
            setIsAdmin(response.data.isAdmin);
            console.log(response.data)
            if(response.data.message != "BAD"){
                alert("LOGGED IN")
            }
            
        },error=>{
            console.log(error);
        });

       
    }


    return (
        <div className = "register-container">
        <div className = "register-form-container">
            
            <div>
                <h1>Login</h1>
                <label htmlFor = "email-field">Email:</label>
                <input name ="email" id = "email-field" type = "text" required onChange = {e => setEmail(e.target.value)} />

                <label htmlFor = "password-field">Password: </label>
                <input  name = "password" id = "password-field" type = "password" required onChange = {e => setPassword(e.target.value)}/>

                <button className = "register-button"to={'/' } onClick={() => handleClick()}>Register</button> 

            </div>
        </div>
       
    </div>
    )
}

export default Login;