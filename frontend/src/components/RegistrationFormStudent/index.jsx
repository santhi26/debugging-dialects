import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import Footer from '../../components/Footer/index.jsx';

export default function RegistrationFormStudent() {

    const navigate = useNavigate() 
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");   
    const [fullName, setFullName] = useState("");
    const [homeLanguage, setHomeLanguage] = useState("")

    
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
        if(id === "homeLanguage"){
            setHomeLanguage(value);
        }
        if(id === "fullName"){
            setFullName(value);
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
                    role: "student",
                    student_name: fullName,
                    student_home_language: homeLanguage,
                    joined_date: new Date().toISOString()
            })}

            const response = await fetch('http://localhost:3000/api/user/register/student', options);
            const data = await response.json();  
            navigate("/login");       
            
        } catch (error) {
            alert(error)
        }
    }
    
    return (
        <>
            <div class="general wf-section">
                <div class="overview fluentcontent wf-section">
                    <div class="content-wrapper-m-copy center content-section-title">
                        <div class="w-richtext">
                            <div class="w-embed">
                            <h1 class="page-title">Sign up</h1>
                                <form className="Form" onSubmit={handleSubmit}>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <input className="form_input" value={username} onChange = {(e) => handleInputChange(e)} name="" type="text" id="username" placeholder="Username" required/>       
                                        </div>
                                        <div className="form-group">
                                            <input className="form_input" value={email} onChange = {(e) => handleInputChange(e)} type="email" id="email" placeholder="Email" required/>       
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <input className="form_input" value={fullName} onChange = {(e) => handleInputChange(e)} type="text" id="fullName" placeholder="Full Name" required/>       
                                        </div>   
                                        <div className="form-group">
                                            <select className="form_input" value={homeLanguage} onChange={(e) => handleInputChange(e)} id="homeLanguage" required>
                                            <option value="">Your Language</option>
                                            <option value="Afrikaans">Afrikaans</option>
                                            <option value="Albanian">Albanian</option>
                                            <option value="Arabic">Arabic</option>
                                            <option value="Bengali">Bengali</option>
                                            <option value="Bulgarian">Bulgarian</option>
                                            <option value="Chinese (Simplified)">Chinese (Simplified)</option>
                                            <option value="Chinese (Traditional)">Chinese (Traditional)</option>
                                            <option value="Czech">Czech</option>
                                            <option value="Danish">Danish</option>
                                            <option value="Dutch">Dutch</option>
                                            <option value="English">English</option>
                                            <option value="Estonian">Estonian</option>
                                            <option value="Finnish">Finnish</option>
                                            <option value="French">French</option>
                                            <option value="German">German</option>
                                            <option value="Greek">Greek</option>
                                            <option value="Hebrew">Hebrew</option>
                                            <option value="Hindi">Hindi</option>
                                            <option value="Hungarian">Hungarian</option>
                                            <option value="Icelandic">Icelandic</option>
                                            <option value="Indonesian">Indonesian</option>
                                            <option value="Italian">Italian</option>
                                            <option value="Japanese">Japanese</option>
                                            <option value="Korean">Korean</option>
                                            <option value="Latvian">Latvian</option>
                                            <option value="Lithuanian">Lithuanian</option>
                                            <option value="Malay">Malay</option>
                                            <option value="Malayalam">Malayalam</option>
                                            <option value="Marathi">Marathi</option>
                                            <option value="Norwegian">Norwegian</option>
                                            <option value="Persian">Persian</option>
                                            <option value="Polish">Polish</option>
                                            <option value="Portuguese">Portuguese</option>
                                            <option value="Punjabi">Punjabi</option>
                                            <option value="Romanian">Romanian</option>
                                            <option value="Russian">Russian</option>
                                            <option value="Serbian">Serbian</option>
                                            <option value="Slovak">Slovak</option>
                                            <option value="Slovenian">Slovenian</option>
                                            <option value="Spanish">Spanish</option>
                                            <option value="Swahili">Swahili</option>
                                            <option value="Swedish">Swedish</option>
                                            <option value="Tamil">Tamil</option>
                                            <option value="Telugu">Telugu</option>
                                            <option value="Thai">Thai</option>
                                            <option value="Turkish">Turkish</option>
                                            <option value="Ukrainian">Ukrainian</option>
                                            <option value="Urdu">Urdu</option>
                                            <option value="Vietnamese">Vietnamese</option>
                                            <option value="Welsh">Welsh</option>
                                            <option value="Yiddish">Yiddish</option>
                                            </select>
                                        </div>   
                                    </div>   
                                    <div className="form-row">
                                        <div className="form-group">
                                            <input className="form_input" value={password} onChange = {(e) => handleInputChange(e)} type="password"  id="password" placeholder="Password" required/>
                                        </div>
                                        <div className="form-group">
                                            <input className="form_input" value={confirmPassword} onChange = {(e) => handleInputChange(e)} type="password" id="confirmPassword" placeholder="Confirm Password" required/>         
                                        </div>   
                                    </div>   
                                    <div className="form-group submit-button">
                                        <button type="submit" className="btn">Register</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
    
}
