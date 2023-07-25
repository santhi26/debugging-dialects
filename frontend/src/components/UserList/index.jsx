import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../contexts";

export default function UserList({setRecipient}) {
    const {users} = useContext(UserContext);
    const [activeUsers, setActiveUsers] = useState([{username:""}]);

    //when users is updated, it edits the list of active users.
    useEffect(()=>{
        setActiveUsers(users.filter(acc => acc.is_online === true));
    },[users])


    function changeRecipient(e) {
        setRecipient(e.target.innerText);
    }



    return (
        <div className='user-list'>
            <h2><u>Active Users</u></h2>
            <ul>
                {activeUsers.map(act => (
                    <button type='button' key={act.user_id} onClick={changeRecipient}>{act.username}</button>
                ))}
            </ul>
        </div>
    )
}