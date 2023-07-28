import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

export default function RegistrationFormTeacher() {

    const navigate = useNavigate() 
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");   
    const [fullName, setFullName] = useState("");
    const [biography, setBiography] = useState("");
    const [homeLanguage, setHomeLanguage] = useState("");
    const [qualifications, setQualifications] = useState("");
    const [image, setImage] =  useState(""); 

    
    const handleInputChange = (e) => {
        const {id, value} = e.target
        
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
        if (id === "fullName") {
            setFullName(value);
        } 
        if (id === "biography") {
            setBiography(value);
        } 
        if (id === "homeLanguage") {
            setHomeLanguage(value);
        } 
        if (id === "qualifications") {
            setQualifications(value);
        } 
        if (id === "image") {
            setImage(value);
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
                    role: "teacher",
                    teacher_name: fullName,
                    teacher_profile_image: image,
                    teacher_biography: biography,
                    teacher_home_language: homeLanguage,
                    qualifications: qualifications,
                    joined_date: new Date().toISOString()
            })}

            const response = await fetch('http://localhost:3000/api/teacher/', options);
            const data = await response.json();  
            navigate("/login")                 
            
        } catch (error) {
            alert(error)
        }
    }
    
    return (
        <div class="general wf-section">
            <div class="overview fluentcontent wf-section">
                <div class="content-wrapper-m-copy center content-section-title">
                    <div class="w-richtext">
                        <div class="w-embed">
                            <h2 class="pagetitle">Teacher register</h2>
                                <form className="Form" onSubmit={handleSubmit}>
                                        <div className="username">
                                            <label className="form_label" htmlFor="username">Username </label>
                                            <input className="form_input" value={username} onChange = {(e) => handleInputChange(e)} name="" type="text" id="username" placeholder="username" required/>       
                                        </div>
                                        <div className="email">
                                            <label className="form_label" htmlFor="email">Email </label>
                                            <input className="form_input" value={email} onChange = {(e) => handleInputChange(e)} type="email" id="email" placeholder="Email" required/>       
                                        </div>
                                        <div className="fullName">
                                            <label className="form_label" htmlFor="fullName">Full Name </label>
                                            <input className="form_input" value={fullName} onChange = {(e) => handleInputChange(e)} type="text" id="fullName" placeholder="Full Name"/>       
                                        </div>
                                        <div className="homeLanguage">
                                            <label className="form_label" htmlFor="homeLanguage">Home Language </label>
                                            <input className="form_input" value={homeLanguage} onChange = {(e) => handleInputChange(e)} type="homeLanguage"  id="homeLanguage" placeholder="Home Language" />
                                        </div>
                                        <div className="qualifications">
                                            <label className="form_label" htmlFor="qualifications">Qualifications </label>
                                            <textarea className="form_input" value={qualifications} onChange = {(e) => handleInputChange(e)} type="password" id="qualifications" placeholder="Qualifications" />
                                        </div> 
                                        <div className="biography">
                                            <label className="form_label" htmlFor="biography">Biography </label>
                                            <textarea className="form_input" value={biography} onChange = {(e) => handleInputChange(e)} type="biography" id="biography" placeholder="Biography" />       
                                        </div>
                                        <div className="image">
                                        <label className="form_label" htmlFor="image">Image URL </label>
                                        <input className="form_input" type="text" value={image} onChange = {(e) => handleInputChange(e)} id="image" placeholder="Image" />
                                        
                                        </div>
                                        <div className="password">
                                            <label className="form_label" htmlFor="password">Password </label>
                                            <input className="form_input" value={password} onChange = {(e) => handleInputChange(e)} type="password"  id="password" placeholder="Password" required/>
                                        </div>
                                        <div className="confirm-password">
                                            <label className="form_label" htmlFor="confirmPassword">Confirm Password </label>
                                            <input className="form_input" value={confirmPassword} onChange = {(e) => handleInputChange(e)} type="password" id="confirmPassword" placeholder="Confirm Password" required/>
                                        </div>
                                        <div className="submit-button">
                                            <button type="submit" className="btn">Register</button>
                                        </div>  
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
