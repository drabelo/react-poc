import React, { Component } from 'react';
import Form from '../../containers/Form';
import UserList from '../../containers/UserList';
import DetailView from '../../containers/DetailView';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <div className="col-4">
              <Form />
            </div>
            <div className="col-4">
              <UserList />
            </div>
            <div className="col-4">
              <DetailView />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
