export default function Message({msg}) {
    return (
        <div className="message">
            <h6>{msg.sender_username} - time</h6>
            <p>{msg.message}</p>
        </div>
    )
}