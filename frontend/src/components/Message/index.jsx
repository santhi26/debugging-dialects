import { useContext, useState, useEffect, useRef } from "react";
import { UserContext } from "../../contexts";
export default function Message({msg}) {
    const {contextUsername} = useContext(UserContext);
    const person = msg.sender_username === contextUsername ? ' user' : ' other';
    // const isInitialMount = useRef(true)

    // //for testing purposes
    // const [incomingDate, setIncomingDate] = useState({});

    // useEffect(()=>{
    //     console.log(incomingDate)
    // }, [incomingDate])
    
    return (
        <>
            {msg.date_sent ? (
            <div className={'message' + person}>
                <h6>{msg.date_sent.slice(11,16)} - {msg.date_sent.slice(0,10)}</h6>
                <p>{msg.message}</p>
            </div>
            ):""}
            
        
        
        </>
    )
}

