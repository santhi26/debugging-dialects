import React, {useState, useEffect} from 'react';
import {useNavigate, useLocation} from 'react-router-dom';

export default function TeacherProfile({data}) {  
  const navigate = useNavigate();  
  const location = useLocation();
  const {teacher_name, 
        teacher_profile_image, 
        teacher_biography,
        teacher_home_language,
        qualifications} = data

  const isUpdateProfilePage = location.pathname.includes('/updateTeacherProfile');      

  return (
    <>
      {!isUpdateProfilePage && (
        <>
          <div>Teacher Profile</div>
          <img src={teacher_profile_image} alt="Teacher Profile" />
          <p>Name: {teacher_name}</p>
          <p>Home Language: {teacher_home_language}</p>
          <p>Qualifications: {qualifications}</p>
          <p>Biography: {teacher_biography}</p>
          <button onClick={() => navigate("/updateTeacherProfile")}>Update Profile</button>
        </>
      )}
    </>
  );

  
}
