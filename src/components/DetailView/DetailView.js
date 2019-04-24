import React, { Component } from 'react';
import Form from '../GenericForm/Form';

class DetailView extends Component {
  state = {
    loading: false,
  };

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({
        firstName: this.props.user.firstName,
        lastName: this.props.user.lastName,
        phoneNumber: this.props.user.phoneNumber,
        address: this.props.user.address,
        city: this.props.user.city,
        dob: this.props.user.dob,
        age: this.props.user.age,
        heightFeet: this.props.user.heightFeet,
        heightInches: this.props.user.heightInches,
        education: this.props.user.education,
        degree: this.props.user.degree,
        id: this.props.user.id,
        completedDegree: this.props.user.completedDegree,
      });
    }
  }

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
        'FAILED SAVING: Name, Number, Address, and Date of Birth are required fields.'
      );
      return;
    }

    this.setState({ loading: true });
    fetch(`https://reqres.in/api/users/${this.state.id}`, {
      method: 'PUT',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(result => {
        this.props.updateUser({ index: this.props.index, data: result });
        this.setState({ loading: false });
        window.scrollTo(0, 0);
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
        {this.props.user && (
          <div>
            <h1>Modify User information</h1>
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
            />
          </div>
        )}
      </div>
    );
  }
}

export default DetailView;
