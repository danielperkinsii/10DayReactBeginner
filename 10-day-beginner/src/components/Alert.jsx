import React, { Component } from 'react'

class Alert extends React.Component {
    state = {
        phrase: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.currentTarget.id]: e.currentTarget.value
        }) 
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (this.state.phrase === 'open sesame') {
            alert('You may pass!')
        }
        this.setState({
            phrase: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <label>What's the secret phrase?</label><br/>
                    <input type='text' value={this.state.phrase} id='phrase' onChange={this.handleChange} placeholder='suuuuper secret'/>
                </form>
                <p>
                    Hint: <strong>open sesame</strong>
                </p>
            </div>
        )
    }
}

export default Alert
