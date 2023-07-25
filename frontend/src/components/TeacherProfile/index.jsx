import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

export default function TeacherProfile({data}) {  
    const {teacher_name, 
        teacher_profile_image, 
        teacher_biography,
        teacher_home_language,
        qualifications} = data

  return (
    <>
      <div>Teacher Profile</div>
      <img src={teacher_profile_image} />
      <p>Name: {teacher_name}</p>
      <p>Home Language: {teacher_home_language}</p>
      <p>Qualifications: {qualifications}</p>
      <p>Biography: {teacher_biography}</p>  
      <button onClick={navigate("/teacher/update")}>Update Profile</button>  
    </>

  )
}
