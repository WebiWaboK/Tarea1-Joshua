function Button({value, onClick}: {value: string; onClick: ()=> void}) {
    return <button onClick={onClick}>{value}</button>
}

export default Button;