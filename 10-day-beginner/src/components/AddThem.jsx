import React, { Component } from 'react'

class AddThem extends React.Component {
    state = {
        num1: 0,
        num2: 0,
        total: 0
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.type === 'number' ? parseInt(e.target.value) : e.target.value
        }) 
    }

    handleSubmit = (e) => {
        e.preventDefault()
    }

    calculateTotal = () => {
        let sum = 0
        sum = this.state.num1 + this.state.num2
        this.setState({
            total: sum
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <label>Add two numbers!</label><br/>
                    <input type='number' id='num1' onChange={this.handleChange} placeholder='number'/>
                    <input type='number' id='num2' onChange={this.handleChange} placeholder='number'/>
                    <button onClick={this.calculateTotal}>Add Them!</button>
                </form>
        <p>The sum of the two numbers is <strong>{this.state.total}</strong></p>
            </div>
        )
    }
}

export default AddThem