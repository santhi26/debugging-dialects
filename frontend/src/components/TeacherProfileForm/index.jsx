import React, {useState, useEffect, useContext} from 'react';
import { UserContext } from '../../contexts';
import { TeacherProfile } from '..';
import {useNavigate} from 'react-router-dom';

export default function TeacherProfileForm() {
    const { userID } = useContext(UserContext);
    const [fullName, setFullName] = useState("");
    const [biography, setBiography] = useState("");
    const [homeLanguage, setHomeLanguage] = useState("");
    const [qualifications, setQualifications] = useState("");
    const [image, setImage] =  useState("")
    const [data, setData] = useState([]);
    const navigate = useNavigate()  

    
    const handleInputChange = (e) => {
        const { id, value } = e.target;

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
        teacherProfileAPI();
        navigate("/teacher/profile")
    }

    const teacherProfileAPI = async() => {
        try {
            const options = {
                method: "PUT",
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

            const response = await fetch(`http://localhost:3000/api/teacher/${userID}/update`, options);
            await response.json();  
                      
            
        } catch (error) {
            alert(error)
        }
    }

    const searchTeacherAPI = async() => {
        try {
            const response = await fetch(`http://localhost:3000/api/teacher/${userID}/details`);
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
                    <label className="form_label" htmlFor="image">Image URL </label>
                    <input className="form_input" type="text" value={image} onChange = {(e) => handleInputChange(e)} id="image" placeholder="Image" />
                    
                    </div>
                <div className="submit-button">
                    <button type="submit" className="btn">Submit</button>
                </div>
               
            </form>
        </>
    
  )
}
