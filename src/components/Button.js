import { Component } from 'react'

const styles = {
    button: {
        backgroundColor: '#202022',
        color: '#fff',
        padding: '10px 15px',
        border: 'none',
        borderRadius: '3px',
        cursor: 'pointer',
    }
}

class Button extends Component {
    render() {
        return (
            <button style={styles.button}{...this.props} />
        )
    }
}




export default Button