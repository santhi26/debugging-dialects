
export default function Message({msg}) {
    return (
        <div className="message">
            <h6 data-testid="message-sender">{msg.sender_username} - time</h6>
            <p>{msg.message}</p>
        </div>
    )
}

