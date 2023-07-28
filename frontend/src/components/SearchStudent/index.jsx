import {useState, useEffect, useContext} from 'react';
import {useLocation} from 'react-router-dom';
import { UserContext } from '../../contexts';
import {TeacherProfile, StudentLevel} from '../'


export default function SearchStudent() {
    const { level, setLevel } = useContext(UserContext);
    const [data, setData] = useState([])
    const location = useLocation();
    const userID = localStorage.getItem("userID");

    
    useEffect(() =>{
        const searchStudentAPI = async() => {
            try {
                const response = await fetch(`http://localhost:3000/api/student/${userID}/details`);
                const result = await response.json();
                setData(result);   
                setLevel(result.student_level);
                      
                
            } catch (error) {
                console.log(error)
            }
        }
        searchStudentAPI()
    },[])
    console.log(level, "LEVEL", )  
  return (
    <StudentLevel />
  )
}
