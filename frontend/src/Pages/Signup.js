import React, {useState} from "react";
import { Link } from 'react-router-dom';
import './signup.css';
import axios from 'axios';
function Signup (props) {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [isAdmin,setIsAdmin] = useState(false);

    async function handleClick(){
        if(email === "" || password === ""){return;}
        await axios.post('/api/create-user',{
            name:name,
            email:email,
            password:password,
            isAdmin:isAdmin
        });

    }
    return (
        <div className = "register-container">
        <div className = "register-form-container">
            
            <div>
                <h1>Register for an Account</h1>
                <label>Name:</label>
                <input name = "name" id = "name-field" type = "text" required onChange={e => setName(e.target.value)} />

                <label htmlFor = "email-field">Email:</label>
                <input name = "email" id = "email-field" type = "email" required  onChange={e => setEmail(e.target.value)}/>

                <label htmlFor = "password-field">Password: </label>
                <input name = "password" id = "password-field" type = "password"  required onChange={e => setPassword(e.target.value)}/>

                <label htmlFor="admin"> <h2>Are you an admin:</h2></label>
                <input type="checkbox" id="admin-field" name="admin" value="Admin" onChange={e => setIsAdmin(!isAdmin)} />

             <Link className = "register-button"to={'/' } onClick={() => handleClick()}>Register</Link> 

                <p className = "login-text">Already registered?  <Link to={'/login' }>Sign in here</Link></p>
            </div>
        </div>
       
    </div>
    )
}



export default Signup;