import React from 'react';
import ReactDOM from 'react-dom';
import UserList from './UserList';

it('renders without crashing with no users', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UserList users={[]} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders with users', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UserList users={[{ firstName: 'Dailton' }]} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
