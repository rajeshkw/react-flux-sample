import React from 'react';
import AppStore from '../store/store';
import User from './User.jsx';
import AddUser from './AddUser.jsx';
import {Link} from 'react-router-dom';

class UserList extends React.Component {
  constructor() {
    super();
    this.state = {
      users : AppStore.getUsers()
    }
    this.onChange = this.onChange.bind(this);
  }
  componentWillMount(){
    debugger;
    AppStore.addChangeListener(this.onChange);
  }
  componentWillUnmount(){
    AppStore.removeChangeListener(this.onChange);
  }
  onChange(){
    debugger;
    this.setState({
      users : AppStore.getUsers()
    });
  }
  render(){
    return(
      <div className="row">
        <AddUser />
        <h1>List of data</h1>
        <table className="table table-bordered">
            <thead></thead>
            <tbody>
              { this.state.users.map( user => <tr key={user.id}>
                  <td>{ user.id }</td>
                  <td><Link to={`/user/${user.id}`}>{ user.firstName }</Link></td>
                  <td>{ user.lastName }</td>
              </tr> ) }
            </tbody>
        </table>
      </div>
    );
  }
}
export default UserList;
