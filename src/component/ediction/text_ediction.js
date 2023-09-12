import './text_ediction.css'

const TextEdiction = (props) => {
    return <p
            style={{ color: '#8686e2', textTransform: 'uppercase' }}
            className='text'>
                {props.children}
            </p>
}
export default TextEdiction;