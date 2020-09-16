import React, { Component } from 'react'

class BoxMove extends React.Component {
    state = {
        offSetTop: 350
    }

    moveBoxUp = () => {
        console.log(this.state.offSetTop)
        const move = this.state.offSetTop - 10
        console.log(move)
        this.setState({
            offSetTop: move
        })
    }

    render() {
        return (
            <div className='box-container'>
                <button onClick={this.moveBoxUp}>Move Up</button>
                <div className='box' style={{
                    transform: `translateY(${this.state.offSetTop}px)`
                }}>
                </div>
            </div>
        )
    }
}

export default BoxMove