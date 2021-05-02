const Button = ({buttonName, color, action}) => {
    return (
        <button style={{backgroundColor: color}} className='btn'>{buttonName}</button>
    )
}

export default Button
