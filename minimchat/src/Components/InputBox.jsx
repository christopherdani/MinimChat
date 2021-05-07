//import Button from './Button.jsx'
import {useState} from 'react'

const InputBox = ({onAdd}) => {
    const [msg, setMsg] = useState('');

    const handleSend = (e) => {
        // prevent refresh here
        e.preventDefault();
        
        const text = msg.trim();

        if (msg.length > 0) {
            onAdd(text);
        }
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
