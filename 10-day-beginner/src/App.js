import React from 'react';
import User from './components/User'
import './App.css';

const userInformation = {
  name: 'Daniel P',
  location: 'St. Louis',
  foodType: 'Tacos',
  age: '27',
  likes: 'Running',
  twitterHandle: '@danielperkinsii',
  avatar: 'https://pbs.twimg.com/profile_images/1300389131831345153/DJTq0VgO_400x400.jpg'
}


function App() {
  return (
    <div className='App'>
      <User/>
      <div className='user-deets'>
        <img src={userInformation.avatar}/>
        <h3><a href='https://twitter.com/danielperkinsii'>{userInformation.name}</a></h3>
        <p><strong>Location: </strong>{userInformation.location}</p>
        <p><strong>Favorite Food: </strong>{userInformation.foodType}</p>
        <p><strong>Age: </strong>{userInformation.age}</p>
        <p><strong>Likes: </strong>{userInformation.likes}</p>
        <p><strong>Twitter: </strong><a href='https://twitter.com/danielperkinsii'>{userInformation.twitterHandle}</a></p>
      </div>
    </div>
  );
}

export default App;
