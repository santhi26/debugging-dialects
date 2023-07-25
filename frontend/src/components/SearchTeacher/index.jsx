import React from 'react'

export default function searchTeacher() {
    const searchTeacherAPI = async() => {
        try {
            const response = await fetch(`http://localhost:3000/api/TEACHER/${contextUsername}`);
            const result = await response.json(); 
            setData(result);           
            
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div>searchTeacher</div>
  )
}
