import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserList from './components/UserList.jsx';
import SideBar from './components/SideBar.jsx';
import User from './components/User.jsx';

class App extends React.Component {
  render(){
    return(
      <div id="wrapper" className="toggled">
          <SideBar/>
          <Router>
            <div id="page-content-wrapper">
                <div className="container-fluid">
                    <Route exact={true} path='/' component={UserList} />
                    <Route path='/list' component={UserList} />
                    <Route path='/user/:id' component={User} />
                </div>
            </div>
          </Router>
      </div>
    );
  }
}
export default App;
