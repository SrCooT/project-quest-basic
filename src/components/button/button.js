import './button.css'
const Button = (props) => {
    const onClick = () => {
        alert(`A label desse botão é ${props.label}`)
    }
    return(
    <button className="btn" onClick={onClick}> {props.label}  
    </button>
    )
}

Button.defaultProps = {
    label: 'Clique aqui'
}

export default Button