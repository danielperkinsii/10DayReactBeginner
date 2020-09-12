import React, { Component } from 'react'

class User extends React.Component {
    render() {
        return (
            <div><div className='user-deets'>
            <img src={this.props.userInformation.avatar}/>
            <h3><a href='https://twitter.com/danielperkinsii'>{this.props.userInformation.name}</a></h3>
            <p><strong>Location: </strong>{this.props.userInformation.location}</p>
            <p><strong>Favorite Food: </strong>{this.props.userInformation.foodType}</p>
            <p><strong>Age: </strong>{this.props.userInformation.age}</p>
            <p><strong>Likes: </strong>{this.props.userInformation.likes}</p>
            <p><strong>Twitter: </strong><a href='https://twitter.com/danielperkinsii'>{this.props.userInformation.twitterHandle}</a></p>
          </div></div>  
        )
    }
}

export default User