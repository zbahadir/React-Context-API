import React, { Component } from 'react';
import propTypes from 'prop-types';
import UserConsumer from './context';

class User extends Component {

    state = {
        isVisible : false
    }

    onClickEvent = (e) => {
      this.setState({
        isVisible: !this.state.isVisible
      })
    }

    onDeleteUser = (dispatch, e) => {
      const {id} = this.props;     
      dispatch({type: "DELETE_USER", payload: id});
    }

    render() {

        // Destructing
        const {name, surname } = this.props; // Destructing
        const {isVisible} = this.state

        return (
          <UserConsumer>
            {
              value => {
                const {dispatch} = value;

                 return (
                   <div className="cols-md-8 mb-4">
                     <div className="card" style={isVisible ? {backgroundColor: "#e1eded"} : null}>
                       <div className="card-header d-flex justify-content-between">
                         <h4 className="d-inline" onClick={this.onClickEvent}>{name}</h4>
                         <i onClick={this.onDeleteUser.bind(this, dispatch)} className="fas fa-trash" style={{cursor: "pointer"}} />
                       </div>
                       {
                         isVisible ? <div className="card-body">
                           <p className="card-text">Adı: {name}</p>
                           <p className="card-text">Soyadı: {surname}</p>
                           </div> : null
                       }
                     </div>
                   </div>
                   )

              }
            }
          </UserConsumer>
        )


    }
}
User.propTypes = {
    id: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    surname: propTypes.string.isRequired,

}
export default User;
