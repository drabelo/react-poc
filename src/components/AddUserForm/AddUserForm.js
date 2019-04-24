import React, { Component } from 'react';
import Form from '../GenericForm/Form';
import urls from '../../constants/urls';

class AddUserForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    address: '',
    city: '',
    dob: '',
    age: '',
    heightFeet: '',
    heightInches: '',
    education: '',
    degree: '',
    completedDegree: false,
    loading: false,
  };

  handleSubmit = event => {
    event.preventDefault();
    if (
      !this.state.firstName ||
      !this.state.lastName ||
      !this.state.phoneNumber ||
      !this.state.address ||
      !this.state.city ||
      !this.state.dob
    ) {
      alert(
        'FAILED SUBMITTING: Name, Number, Address, and Date of Birth are required fields'
      );
      return;
    }

    this.setState({ loading: true });
    fetch(urls.reqres, {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(result => {
        this.props.addUser(result);
        this.setState({ loading: false });
        window.scrollTo(0, 0);
      })
      .catch((error) => {
        alert(
          `FAILED SUBMITTING: ${error.message}`
        );
      });
  };

  handleChange = event => {
    if (event.target.type === 'checkbox') {
      this.setState({ [event.target.name]: event.target.checked });
      return;
    }
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        <h2>Add User</h2>
        <Form
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          phoneNumber={this.state.phoneNumber}
          address={this.state.address}
          city={this.state.city}
          dob={this.state.dob}
          age={this.state.age}
          heightFeet={this.state.heightFeet}
          heightInches={this.state.heightInches}
          education={this.state.education}
          degree={this.state.degree}
          loading={this.state.loading}
          completedDegree={this.state.completedDegree}
          submitText={"Add"}
        />
      </div>
    );
  }
}

export default AddUserForm;
