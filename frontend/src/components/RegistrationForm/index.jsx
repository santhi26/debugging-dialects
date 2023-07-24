import React, {useState, useEffect} from 'react';

export default function RegistrationForm() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [role, setRole] =  useState("")

    
    const handleInputChange = (e) => {
        const {id, value, type, name} = e.target

        if (type === "radio" && name === "role") {
            setRole(value);
        }
        if(id === "fullName"){
            setFullName(value);
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
                    username: fullName,
                    password: password,
                    email: email,
                    role: role,
                    joined_date: new Date().toISOString()
            })}

            const response = await fetch('http://localhost:3000/api/user/register', options);
            const data = await response.json();
            localStorage.setItem("username", data.username);
            localStorage.setItem("token", data.token);
            
            
        } catch (error) {
            console.log(error)
        }
    }
    
  return (
    <form className="Form" onSubmit={handleSubmit}>
        <div className="fullName">
            <label className="form_label" htmlFor="fullName">Full Name </label>
            <input className="form_input" value={fullName} onChange = {(e) => handleInputChange(e)} name="" type="text" id="fullName" placeholder="Full Name" required/>       
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
        <div className="role" onChange={(e) => handleInputChange(e)}>
            <p>I am a: </p>
            <label htmlFor="student">Student</label>
            <input type="radio" id="student" name="role" value="student" />
            <label htmlFor="student">Teacher</label>           
            <input type="radio" id="teacher" name="role" value="teacher" />
        </div>    
        <div className="submit-button">
            <button type="submit" className="btn">Register</button>
        </div>
        </div>        
    </form>
  )
}

