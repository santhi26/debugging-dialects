import React, {useState, useEffect} from 'react';

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
      <p>{teacher_name}</p>
      <p>{teacher_home_language}</p>
      <p>{qualifications}</p>
      <p>{teacher_biography}</p>    
    </>

  )
}
