import React, {useState} from 'react';

export default function RegistrationForm() {
  return (
    <div className="Form">
        <div className="email">
            <label className="form_label" for="email">Email </label>
            <input className="form_input" value={email} type="email" id="email" placeholder="Email" required/>       
        </div>
        <div className="password">
            <label className="form_label" for="password">Password </label>
            <input className="form_input" value={password} type="password"  id="password" placeholder="Password" required/>
        </div>
        <div className="submit-button">
            <button type="submit" class="btn">Register</button>
        </div>
        </div>
    
  )
  }
