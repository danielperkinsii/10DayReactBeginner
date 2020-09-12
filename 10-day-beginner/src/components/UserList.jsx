import React, { Component } from 'react'
import data from '../data/user-data.js'


class UserList extends React.Component {
    render () {
        return (
            <div className='users'>
                {data.map((user, index) => (
                    <div key={index}>
                        <h3>{user.name}</h3>
                        <p>{user.location}</p>
                        <p>{user.car}</p>
                    </div>
                ))}
            </div>
        )
    }
}

export default UserList