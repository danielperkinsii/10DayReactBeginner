import React, { Component } from 'react';
import User from './components/User'
import UserList from './components/UserList'
import './App.css';
import UpdateForm from './components/UpdateForm';


class App extends React.Component {
  state = {
    userInformation: {
      name: 'Daniel P',
      location: 'St. Louis',
      foodType: 'Tacos',
      age: '27',
      likes: 'Running',
      twitterHandle: '@danielperkinsii',
      avatar: 'https://pbs.twimg.com/profile_images/1300389131831345153/DJTq0VgO_400x400.jpg'
    }
  }

  render () {
    return (
      <div className='App'>
        <User userInformation={this.state.userInformation}/>
        <UserList/>
        <UpdateForm />
      </div>
    );
  }
}

export default App;
