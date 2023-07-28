import {useState, useEffect, useContext} from 'react';
import {useLocation} from 'react-router-dom';
import { UserContext } from '../../contexts';
import {TeacherProfile} from '../'


    
export default function TeachersList() {
    const { setRating } = useContext(UserContext);
    const [data, setData] = useState([])
    
    const searchTeachersAPI = async() => {
        try {
            const response = await fetch(`http://localhost:3000/api/teacher/allTeachers`);
            const result = await response.json();
            setData(result);    
            setRating(result)       
            console.log(result, "<<<<<<", result) 
            
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() =>{
      searchTeachersAPI()

    },[])

    return (
        <div className="teachers-container">
			<ul className="teachers-list">
				{data.map((teacher) => <TeacherProfile data={teacher} key={teacher.teacher_id} />)}
			</ul>
		</div>
    )
}
