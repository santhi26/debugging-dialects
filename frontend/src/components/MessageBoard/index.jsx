import {Message} from '../../components';
import { UserContext } from '../../contexts';
import { useContext, useState, useEffect } from 'react';

export default function MessageBoard({messages, recipient}) {
    const {users} = useContext(UserContext);
    const [userRole, setUserRole] = useState("");


    useEffect(()=>{
        const temp = users.filter(acc => acc.username === recipient)
        if (temp) {
            console.log("temp", temp);
            setUserRole(temp[0].role);
        }
    },[recipient])

    return (
        <div className="message-board">
            <h2><u>Messages</u></h2>
            {recipient && userRole ? (
                <h3>{recipient}, {userRole[0].toUpperCase() + userRole.slice(1)}</h3>
            ):""}
            
            <ul>
                {messages.map(msg => (
                    <Message msg={msg}/>
                ))}
            </ul>
        </div>
    )
}