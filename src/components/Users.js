import React, { Component } from 'react'
import UserConsumer from './context';
import User from "./User";

class Users extends Component {
    render() {      
      return (
        <UserConsumer>
          {
            value => {
              const {users} = value
              return (
                <div>
                  {
                    users.map(user => {
                      return (
                        <User
                          key = {user.id}
                          id = {user.id}
                          name = {user.name}
                          surname = {user.surname}
                          />
                      )
                    })
                  }
                </div>
              )
            }
          }
        </UserConsumer>
      )
    }       
}

export default Users;
