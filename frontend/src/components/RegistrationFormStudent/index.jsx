import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

export default function RegistrationFormStudent() {

    const navigate = useNavigate() 
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [role, setRole] =  useState("")

    
    const handleInputChange = (e) => {
        const {id, value, type, name} = e.target
        
        if(id === "username"){
            setUsername(value);
        }        
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "confirmPassword"){
            setConfirmPassword(value);
        }
        if(id === "student"){
            setRole(value);
        }
        if(id === "teacher"){
            setRole(value);
        }        
    }

    const handleSubmit  = (e) => {
        e.preventDefault();
        registerAPI()
    }

    const registerAPI = async() => {
        try {
            const options = {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                    email: email,
                    role: role,
                    joined_date: new Date().toISOString()
            })}

            const response = await fetch('http://localhost:3000/api/user/register', options);
            const data = await response.json();  
            alert("registered!")        
            
        } catch (error) {
            alert(error)
        }
    }
    
  return (
    <form className="Form" onSubmit={handleSubmit}>
        <div className="username">
            <label className="form_label" htmlFor="username">Username </label>
            <input className="form_input" value={username} onChange = {(e) => handleInputChange(e)} name="" type="text" id="username" placeholder="username" required/>       
        </div>
        <div className="email">
            <label className="form_label" htmlFor="email">Email </label>
            <input className="form_input" value={email} onChange = {(e) => handleInputChange(e)} type="email" id="email" placeholder="Email" required/>       
        </div>
        <div className="password">
            <label className="form_label" htmlFor="password">Password </label>
            <input className="form_input" value={password} onChange = {(e) => handleInputChange(e)} type="password"  id="password" placeholder="Password" required/>
        </div>
        <div className="confirm-password">
            <label className="form_label" htmlFor="confirmPassword">Confirm Password </label>
            <input className="form_input" value={confirmPassword} onChange = {(e) => handleInputChange(e)} type="password" id="confirmPassword" placeholder="Confirm Password" required/>         
        <div className="submit-button">
            <button type="submit" className="btn">Register</button>
        </div>
        </div>        
    </form>
  )
}

