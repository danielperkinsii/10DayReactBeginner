import React, { Component } from 'react'

class UpdateForm extends React.Component {
   state = {
       userInformation: {
        name: '',
       }
   }

      handleChange = (event) => {
        console.log(event.currentTarget.value)
        this.setState({
          [event.target.id]: event.currentTarget.value,
        })
      }

  handleSubmit = (event) => {
    event.preventDefault()
    
  }

    render () {
        return (
            <div>
                <div>
                    <p>Display Name: {this.state.name}</p>
                    <p>Display Age: {this.state.age}</p>
                </div>
                <div>
                    <form onSubmit={this.props.handleSubmit}>
                        <label className='label' htmlFor='name' >Name: </label><br/>
                        <input id='name' className='input' type='text' onChange={this.handleChange} /><br/>
                        <label className='label' htmlFor='name' >Age: </label><br/>
                        <input id='age' className='input' type='text' onChange={this.handleChange} /><br/>
                        <input className='input' type='submit'/>
                    </form>
                </div>
            </div>
        )
    }
}

export default UpdateForm