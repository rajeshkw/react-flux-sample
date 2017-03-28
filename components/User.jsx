import React from 'react';
import AppStore from '../store/store';
import AppActions from '../actions/actions';
import Button from './Button.jsx';

class User extends React.Component {
  constructor() {
    super();
  }
  componentWillMount(props){
    let i = this.props.match.params.id;
    let users = AppStore.getUsers();
    this.state = users.find( user => user.id == i );
  }
  render(){
    return(
      <div>
          <dl className="">
            <dd>First name</dd>
            <dl>{this.state.firstName}</dl>
          </dl>
      </div>
    )
  }
}
export default User;
