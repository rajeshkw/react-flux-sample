import React from 'react';
import AppActions from '../actions/actions';

class AddUser extends React.Component {
  constructor(){
    super();
    this.submitForm = this.submitForm.bind(this);
  }
  submitForm(e){
    debugger;
    AppActions.addUser({ firstName: 'kop',lastName:'jio' });
    e.preventDefault();
  }
  render(){
    return(
      <div className="row">
        <form onSubmit={ this.submitForm }>
          <div className="col-lg-3">
            <div className="form-group">
              <label>First name</label>
              <input className="form-control"></input>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="form-group">
              <label>Last name</label>
              <input className="form-control"></input>
            </div>
          </div>
          <div className="col-lg-12">
            <input className="btn btn-primary" type="submit" value="Add User"/>
          </div>
        </form>
      </div>
    );
  }
}
export default AddUser;
