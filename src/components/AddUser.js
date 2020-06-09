import React, { Component } from 'react'
import posed from 'react-pose';
import UserConsumer from '../components/context';
var uniqid = require('uniqid');

const Animation = posed.div({
  visible: { 
    opacity: 1,
    applyAtStart: {
      display: "block"
    } 
  },
  hidden:  { 
    opacity: 0,
    applyAtEnd: {
      display: "none"
    } 
  }
});

class AddUser extends Component {

  state = {
    visible: true,
    name: '', 
    surname: ''
  }

  changeVisibility = (e) => {
    this.setState({
      visible: !this.state.visible 
    })
  }

  addUser = (dispatch, e) => {
    e.preventDefault();
    const {name, surname} = this.state;
    const newUser = {
      id: uniqid(),
      name,
      surname
    } 
    dispatch({type: "ADD_USER", payload: newUser});   
  }

  changeInput = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    });
  }
  
  render() {
    const {visible, name, surname} = this.state;

    return (
      <UserConsumer>
        {
          value => {
            const {dispatch} = value;
            return (
              <div className="cold-md-8 mb-4">
                <button onClick={this.changeVisibility} className="btn btn-dark btn-block mb-2">{visible ? "Hide" : "Show"}</button>
                <Animation pose = {visible ? "visible" : "hidden"}>
                <div className="card">
                  <div className="card-header">
                    <h4>Add User Form</h4>
                  </div>
                  <div className="card-body">
                    <form onSubmit = {this.addUser.bind(this, dispatch)}>
                      <div className="form-group">
                        <label htmlFor="name"> Name</label>
                        <input 
                          type="text" 
                          name="name" 
                          id="name" 
                          placeholder="Enter Name" 
                          value = {name}
                          onChange={this.changeInput}
                          className = "form-control" />                  
                      </div>
                      <div className="form-group">
                        <label htmlFor="surname"> SurName</label>
                        <input 
                          type="text" 
                          name="surname" 
                          id="surname" 
                          placeholder="Enter Surname" 
                          value = {surname}
                          onChange={this.changeInput}
                          className = "form-control" />                  
                      </div>
                      <button className="btn btn-danger btn-block" type="submit">Add User</button>
                    </form>
                  </div>
                </div>
                </Animation>        
              </div>
            )
          }
        }
      </UserConsumer>
    ) 
  }
}

export default AddUser;
