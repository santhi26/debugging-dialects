import {Message} from '../../components';
export default function MessageBoard({messages, recipient}) {
    return (
        <div className="message-board">
            <h2><u>Messages</u></h2>
            <h3>{recipient}</h3>
            <ul>
                {messages.map(msg => (
                    <Message msg={msg}/>
                ))}
            </ul>
        </div>
    )
}