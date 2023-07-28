import {Message} from '../../components';
import { UserContext } from '../../contexts';
import { useContext, useState, useEffect, useRef } from 'react';

export default function MessageBoard({messages, recipient}) {
    const {users} = useContext(UserContext);
    const [userRole, setUserRole] = useState("");
    const isInitialMount = useRef(true)


    useEffect(()=>{
        if (isInitialMount.current){
            isInitialMount.current = false;
        } else {
            const temp = users.filter(acc => acc.username === recipient)
            if (temp) {
                setUserRole(temp[0].role);
            }
        }
    },[recipient])

    return (
        <div className="message-board">
            <h2>Messages</h2>
            {recipient && userRole ? (
                <center><h3>{recipient} ({userRole[0].toUpperCase() + userRole.slice(1)})</h3></center>
            ):""}
            <div className='message-list'>
                <ul>
                    {messages.map(msg => (
                        <Message msg={msg}/>
                    ))}
                </ul>
            </div>
        </div>
    )
}
