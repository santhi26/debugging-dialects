import {useState, useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import { UserContext } from '../../contexts';
import { Link } from 'react-router-dom';

export default function LoginForm() {

    const navigate = useNavigate();
    const { setContextUsername, setUserID, setRole, setLevel } = useContext(UserContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const handleInputChange = (e) => {
        const {id, value} = e.target;
        
        if(id === "password"){
            setPassword(value);
        }
        if(id === "username"){
            setUsername(value);
        }
    }

    const handleSubmit  = (e) => {
        e.preventDefault();
        loginAPI()
    }

    const loginAPI = async() => {
        try {
            const options = {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            };

            const response = await fetch('http://localhost:3000/api/user/login', options);
            const data = await response.json();  

            if(data.username) {
                localStorage.setItem("username", data.username);
                localStorage.setItem("token", data.token);    
                localStorage.setItem("userID", data.user_id);            
                setContextUsername(data.username); 
                setUserID(data.user_id);
                setRole(data.role); 
                console.log(data.role);                  
                data.role === "student" ? navigate("/student") : navigate("/teacher");                
            } else {
                alert("Incorrect Credentials");
            }          
        } catch (error) {
            alert(error);
        }
    }

    return (
        <>
            <div class="general wf-section">
                <div class="overview fluentcontent wf-section">
                    <div class="content-wrapper-m-copy center content-section-title">
                        <div class="w-richtext">
                            <div class="w-embed">
                                <h2 class="pagetitle">Login</h2>
                                <form className="Form" onSubmit={handleSubmit}>
                                    <p>Not got an account? <Link to="/registerHome">Signup</Link></p>
                                    <div className="username">
                                        <label className="form_label" htmlFor="username">Username </label>
                                        <input className="form_input" value={username} onChange = {(e) => handleInputChange(e)} name="" type="text" id="username" placeholder="username" required/>       
                                    </div>                
                                    <div className="password">
                                        <label className="form_label" htmlFor="password">Password </label>
                                        <input className="form_input" value={password} onChange = {(e) => handleInputChange(e)} type="password" id="password" placeholder="Password" required/>
                                    </div>                
                                    <div className="submit-button">
                                        <button type="submit" className="btn">Login</button>
                                    </div>                      
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
