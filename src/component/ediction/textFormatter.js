const TextFormatter = (msg) => {
    return <p style={{ 
                    color: '#8686e2',
                    textTransform: 'uppercase' }}   >
                        {msg.children}
            </p>
}
export default TextFormatter;