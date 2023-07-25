import {TeacherProfile} from '../../components'
import {useState, useEffect, useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import { UserContext } from '../../contexts';

export default function searchTeacher() {
    const { userID } = useContext(UserContext);
    console.log(userID)
    const [data, setData] = useState([])
    const searchTeacherAPI = async() => {
        try {
            const response = await fetch(`http://localhost:3000/api/teacher/${userID}/details`);
            const result = await response.json();
            setData(result);           
            
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() =>{
      searchTeacherAPI()
    },[])

  return (
    <TeacherProfile data={data} />
  )
}
