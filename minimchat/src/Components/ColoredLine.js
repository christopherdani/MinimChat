const ColoredLine = ({color}) => {
    return <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 5
        }}
    />
}

export default ColoredLine
