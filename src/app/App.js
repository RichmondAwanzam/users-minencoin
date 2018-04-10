import React, { Component } from 'react';
import UsersList from '../users/containers/list-users';
import ViewUser from '../users/containers/view-user'
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import AppBar from 'material-ui/AppBar'
class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
    window.addEventListener('resize',(evt) => {
      this.setState({ width: evt.target.innerWidth })
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <AppBar style={{ background: 'rgba(159, 168, 218,0.25)', height: '60px', borderRadius: '3px' }}
            title={<div style={{fontSize:'18px'}}> MineNCoin</div>}
            iconElementLeft={<div/>} />
        </header>
        <BrowserRouter>
          <div className="app-auth-content">
            <Route path="/" exact component={UsersList} />
            <Route path="/users/:id" exact component={ViewUser} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
