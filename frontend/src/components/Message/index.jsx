import { useContext } from "react";
import { UserContext } from "../../contexts";
export default function Message({msg}) {
    const {contextUsername} = useContext(UserContext);
    const person = msg.sender_username === contextUsername ? ' user' : ' other';
    

    const datetime = new Date(msg.send_date);
    return (
        <div className={'message' + person}>
            <h6>{datetime.toTimeString().slice(0, 5)} {datetime.toDateString()}</h6>
            <p>{msg.message}</p>
        </div>
    )
}