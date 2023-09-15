import './btn.css'

const showMessage = () => {
    alert(`a label desse botao é ${Button.defaultProps.label} `)
}

const Button = (props) => {
    return < button className="btn" 
                    onClick={showMessage}>
                        {props.label}
           </button>
}

Button.defaultProps = {
    label: 'Click-me'
}

export default Button;
