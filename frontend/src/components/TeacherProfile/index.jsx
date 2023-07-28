import React, {useState, useEffect, useContext} from 'react';
import {useNavigate, useLocation} from 'react-router-dom';
import { UserContext } from '../../contexts';
import {ChatButton} from '../'

export default function TeacherProfile({data}) {  

  const {role} = useContext(UserContext);
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

          <div class="team-member-card">
            <img src={teacher_profile_image} loading="lazy" width="90" height="90" alt="" class="team-avatar" />
            <div class="person-content">
            <div class="person-name teacher-name">{teacher_name}</div>
            <p class="person-qualifications"><b>{qualifications}</b></p>
            <p class="person-bio">{teacher_biography}</p>
            </div>
          </div>
        </>
      )}
    </>
  );

  
}
