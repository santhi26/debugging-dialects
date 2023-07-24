import React, {useState, useEffect} from 'react';


export default function TeacherProfileForm() {
    const [fullName, setFullName] = useState("");
    const [biography, setBiography] = useState("");
    const [homeLanguage, setHomeLanguage] = useState("");
    const [qualifications, setQualifications] = useState("");
    const [image, setImage] =  useState("")

    
    const handleInputChange = (e) => {
        const { id, value } = e.target;

        if (id === "fullname") {
          setFullName(value);
        } else if (id === "biography") {
          setBiography(value);
        } else if (id === "homeLanguage") {
          setHomeLanguage(value);
        } else if (id === "qualifications") {
          setQualifications(value);
        }       
    }

    const handleSubmit  = (e) => {
        e.preventDefault();
        registerAPI()
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0]; // Get the first selected file (if multiple files are allowed)
        setImage(file);
      };

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
            localStorage.setItem("username", data.username);
            localStorage.setItem("token", data.token);
            
            
        } catch (error) {
            console.log(error)
        }
    }
  
    return (
        <>
            <p>Profile</p>
            <form className="Form" onSubmit={handleSubmit}>
        <div className="fullname">
            <label className="form_label" htmlFor="fullname">Full Name </label>
            <input className="form_input" value={fullName} onChange = {(e) => handleInputChange(e)} type="text" id="fullname" placeholder="Full Name"/>       
        </div>
        <div className="homeLanguage">
            <label className="form_label" htmlFor="homeLanguage">Home Language </label>
            <input className="form_input" value={homeLanguage} onChange = {(e) => handleInputChange(e)} type="homeLanguage"  id="homeLanguage" placeholder="homeLanguage" required/>
        </div>
        <div className="qualifications">
            <label className="form_label" htmlFor="qualifications">Qualifications </label>
            <input className="form_input" value={qualifications} onChange = {(e) => handleInputChange(e)} type="password" id="qualifications" placeholder="qualifications" required/>
        </div> 
        <div className="biography">
            <label className="form_label" htmlFor="biography"> Biography </label>
            <input className="form_input" value={biography} onChange = {(e) => handleInputChange(e)} type="textarea" id="biography" placeholder="biography" />       
        </div>
        <div className="image">
          <label className="form_label" htmlFor="image">Upload Image</label>
          <input
            type="file"
            id="image"
            accept="image/*" // Only allow image files
            onChange={handleImageChange}
          />
        </div>
        
        <div className="submit-button">
            <button type="submit" className="btn">Submit</button>
        </div>
               
    </form>
        </>
    
  )
}
