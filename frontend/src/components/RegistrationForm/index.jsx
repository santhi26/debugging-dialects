import React, {useState} from 'react';

export default function RegistrationForm() {
    const [fullName, setFullName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);

    const handleInputChange = (e) => {
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
    }
    
  return (
    <div className="Form">
        <div className="fullName">
            <label className="form_label" for="fullName">Full Name </label>
            <input className="form_input" value={fullName} name="" type="text" id="fullName" placeholder="Full Name" required/>       
        </div>
        <div className="email">
            <label className="form_label" for="email">Email </label>
            <input className="form_input" value={email} type="email" id="email" placeholder="Email" required/>       
        </div>
        <div className="password">
            <label className="form_label" for="password">Password </label>
            <input className="form_input" value={password} type="password"  id="password" placeholder="Password" required/>
        </div>
        <div className="confirm-password">
            <label className="form_label" for="confirmPassword">Confirm Password </label>
            <input className="form_input" value={confirmPassword} type="password" id="confirmPassword" placeholder="Confirm Password" required/>
        <div className="submit-button">
            <button type="submit" class="btn">Register</button>
        </div>
        </div>
        
    </div>
  )
}

