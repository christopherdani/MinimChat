const Message = (props) => {
    const {userName, msg} = props;

    return (
        <div>
            {msg} by {userName}
        </div>
    )
}

export default Message
