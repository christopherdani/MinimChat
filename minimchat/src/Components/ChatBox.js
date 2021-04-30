import ColoredLine from "./ColoredLine"
import InputBox from "./InputBox"

const ChatBox = ({name}) => {
    return (
        <form className='chat-box-container'>
            <div className='form-control'>
                <InputBox />
            </div>
        </form>
    )
}

export default ChatBox
