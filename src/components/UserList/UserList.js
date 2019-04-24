import React, { Component } from 'react';

class UserList extends Component {
  render() {
    let users;

    if (this.props.users.length > 0) {
      users = this.props.users.map((user, index) => (
        <button
          type="button"
          className="list-group-item list-group-item-action"
          key={index}
          onClick={() => this.props.setSelectedIndex(index)}
        >
          {user.firstName}
        </button>
      ));
    }

    return (
      <div>
        {users && (
          <div>
            <h2>Users Table</h2>
            <div className="list-group">{users}</div>
          </div>
        )}
      </div>
    );
  }
}

export default UserList;
