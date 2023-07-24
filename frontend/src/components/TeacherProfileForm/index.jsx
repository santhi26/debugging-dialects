import React, {useState, useEffect, useContext} from 'react';
import { UserContext } from '../../contexts';
import { TeacherProfile } from '..';

export default function TeacherProfileForm() {
    const { contextUsername } = useContext(UserContext);
    const [fullName, setFullName] = useState("");
    const [biography, setBiography] = useState("");
    const [homeLanguage, setHomeLanguage] = useState("");
    const [qualifications, setQualifications] = useState("");
    const [image, setImage] =  useState("")
    const [data, setData] = useState([]);  

    
    const handleInputChange = (e) => {
        const { id, value } = e.target;

        if (id === "fullName") {
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
        teacherProfileAPI()
    }
    //WORK ON IMAGE UPLOAD WHEN HAVING THE ROUTE
    const handleImageChange = (e) => {
        const file = e.target.files[0]; 
        const reader = new FileReader();

        reader.onloadend = () => {
          // When the reader finishes loading the file, convert it to a Base64 string
          setImage(reader.result);
        };
    
        if (file) {
          // Start reading the file as a Data URL (Base64 encoded string)
          reader.readAsDataURL(file);
        }
        
      };

    const teacherProfileAPI = async() => {
        try {
            const options = {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    teacher_name: fullName,
                    teacher_profile_image: image,
                    teacher_biography: biography,
                    teacher_home_language: homeLanguage,
                    qualifications: qualifications
            })}

            const response = await fetch('http://localhost:3000/api/user/register', options);
            await response.json();  
                      
            
        } catch (error) {
            console.log(error)
        }
    }

    const searchTeacherAPI = async() => {
        try {
            const response = await fetch(`http://localhost:3000/api/TEACHER/${contextUsername}`);
            const result = await response.json(); 
            setData(result);           
            
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        searchTeacherAPI();

    }, [handleSubmit]);
  
    return (
        <>  
            {<TeacherProfile data={data} />}
            <p>Profile</p>
            <form className="Form" onSubmit={handleSubmit}>
        <div className="fullName">
            <label className="form_label" htmlFor="fullName">Full Name </label>
            <input className="form_input" value={fullName} onChange = {(e) => handleInputChange(e)} type="text" id="fullName" placeholder="Full Name"/>       
        </div>
        <div className="homeLanguage">
            <label className="form_label" htmlFor="homeLanguage">Home Language </label>
            <input className="form_input" value={homeLanguage} onChange = {(e) => handleInputChange(e)} type="homeLanguage"  id="homeLanguage" placeholder="HomeLanguage" />
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
          <label className="form_label" htmlFor="image">Upload Image</label>
          <input
            type="file"
            id="image"
            accept="image/*" 
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
