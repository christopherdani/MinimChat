import ChatHistory from "./ChatHistory.jsx"
import InputBox from "./InputBox.jsx"
import Message from "./Message.jsx"

const ChatBox = (props) => {

    // Display Messages
    const displayMessages = (messages) => {
        return <Message userName='Me' msg='Test'/>
    }

    // Add Message 
    const addMessage = (message) => {
        <Message userName='Me' msg={message}/>
    }

    return (
        <div className='chat-box-container'>
            <ChatHistory />
            <div className='form-control'>
                <InputBox onAdd={addMessage}/>
            </div>
        </div>
    )
}

export default ChatBox
