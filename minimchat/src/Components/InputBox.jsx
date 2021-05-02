//import Button from './Button.jsx'
import {useState} from 'react'
import Message from './Message.jsx'

const InputBox = () => {
    const [msg, setMsg] = useState('');

    const handleSend = (e) => {
        // prevent refresh here
        e.preventDefault();
        
        const text = msg.trim();

        if (msg.length > 0) {
            <Message userName='me' msg={text} />
        }
        //console.log(msg + ' by ' + userName);
        //<Message userName={userName} msg={msg} />
    }
    const handleChange = (event) => {
        setMsg(event.target.value);
    }

    return (
            <form onSubmit={handleSend}>
            <input 
                type='text' 
                placeholder='...'
                value={msg}
                onChange={handleChange}
                onSubmit={handleSend}
            />
            </form>
            //<Button buttonName='Send' color='green' type='submit' />
        
    )
}

export default InputBox
