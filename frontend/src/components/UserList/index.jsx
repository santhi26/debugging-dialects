import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../contexts";

export default function UserList({setRecipient}) {
    const {users} = useContext(UserContext);
    const [activeUsers, setActiveUsers] = useState([{username:""}]);
    const [inactiveUsers, setInactiveUsers] = useState([{username:""}]);

    //when users is updated, it edits the list of active users.
    useEffect(()=>{
        setActiveUsers(users.filter(acc => acc.is_online === true));
        setInactiveUsers(users.filter(acc => acc.is_online === false));
    },[users])


    function changeRecipient(e) {
        setRecipient(e.target.innerText);
    }



    return (
        <div className='user-list'>
            <h2><u>Active Users</u></h2>
            <ul>
                {activeUsers.map(act => (
                    <button type='button' key={act.username} onClick={changeRecipient}>{act.username}</button>
                ))}
            </ul>
            <h2><u>Inactive Users</u></h2>
            <ul>
                {inactiveUsers.map(act => (
                    <button type='button' key={act.username} onClick={changeRecipient}>{act.username}</button>
                ))}
            </ul>
        </div>
    )
}