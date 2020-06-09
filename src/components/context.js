import React, { Component } from 'react'

// https://www.youtube.com/watch?v=9OYkjp7iWos&t=15s
// Video: 23 

// ceate context
const UserContext = React.createContext();
// Provider, Consumer 

// REDUCER
const reducer = (state,action) => {
  switch(action.type) {
    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter(user => action.payload !== user.id)
      }
    case "ADD_USER": 
      return {
        ...state,
        users: [...state.users, action.payload]           
      }  
    default: 
      return state;  
  }
}

export class UserProvider extends Component {
  state = {
    users: [
      {
        id: '1',
        name: "Zafer",
        surname: "BAHADIR"
      },
      {
        id: '2',
        name: "Hülya",
        surname: "Aslı"
      },
      {
        id: '3',
        name: "Hülya",
        surname: "Aslı"
      }
    ],
    // ACTION
    dispatch : action => {
      this.setState(state => reducer(state,action));
    }
  }
    render() {
        return (
          <UserContext.Provider value = {this.state}>
            {this.props.children}
          </UserContext.Provider>
        )
    }
}

const UserConsumer = UserContext.Consumer;
export default UserConsumer;