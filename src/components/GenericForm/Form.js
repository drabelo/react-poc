import React, { Component } from 'react';
import ReactLoading from 'react-loading';
import PropTypes from 'prop-types';
import './Form.css';

class Form extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="firstName"
              className="form-control form-control-sm"
              placeholder="First Name"
              value={this.props.firstName}
              onChange={this.props.handleChange}
            />
          </div>
          <div className="form-group">
            <input
              placeholder="Last Name"
              type="text"
              name="lastName"
              className="form-control form-control-sm"
              value={this.props.lastName}
              onChange={this.props.handleChange}
            />
          </div>
          <div className="form-group">
            <input
              placeholder="Phone Number"
              type="tel"
              name="phoneNumber"
              className="form-control form-control-sm"
              value={this.props.phoneNumber}
              onChange={this.props.handleChange}
            />
          </div>
          <div className="form-group">
            <input
              placeholder="Address"
              type="text"
              name="address"
              className="form-control form-control-sm"
              value={this.props.address}
              onChange={this.props.handleChange}
            />
          </div>
          <div className="form-group">
            <input
              placeholder="City"
              type="text"
              name="city"
              className="form-control form-control-sm"
              value={this.props.city}
              onChange={this.props.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Date of Birth:</label>
            <input
              placeholder="Date of Birth"
              type="date"
              name="dob"
              className="form-control form-control-sm"
              value={this.props.dob}
              onChange={this.props.handleChange}
            />
          </div>
          <div className="form-group">
            <input
              placeholder="Age"
              type="number"
              name="age"
              className="form-control form-control-sm"
              value={this.props.age}
              onChange={this.props.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Height:</label>
            <div className="container">
              <div className="row">
                <div className="no-padding col-sm">
                  <input
                    type="number"
                    placeholder="Feet"
                    name="heightFeet"
                    className="form-control form-control-sm"
                    value={this.props.heightFeet}
                    onChange={this.props.handleChange}
                  />
                </div>
                <div className="col-sm no-padding">
                  <input
                    type="number"
                    placeholder="Inches"
                    name="heightInches"
                    className="form-control form-control-sm"
                    value={this.props.heightInches}
                    onChange={this.props.handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">Education</label>
            <select
              className="form-control form-control-sm"
              name="education"
              value={this.props.education}
              onChange={this.props.handleChange}
            >
              <option value="High School">High school</option>
              <option value="Bachelors">Bachelors</option>
              <option value="Masters">Masters</option>
              <option value="PhD">PhD</option>
            </select>
          </div>
          {this.props.education && this.props.education !== 'High School' && (
            <div className="checkbox">
              <label>
                Completed Degree? &nbsp;
                <input
                  name="completedDegree"
                  checked={this.props.completedDegree}
                  onClick={this.props.handleChange}
                  type="checkbox"
                />
              </label>
            </div>
          )}
          {this.props.completedDegree && (
            <div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Degree"
                  name="degree"
                  className="form-control form-control-sm"
                  value={this.props.degree}
                  onChange={this.props.handleChange}
                />
              </div>
            </div>
          )}
          <button type="submit" id="submit-btn" className="btn btn-primary">
            Submit
          </button>
          {this.props.loading && (
            <ReactLoading
              className="loading-btn"
              type={'balls'}
              color={'blue'}
              height={15}
              width={77}
            />
          )}
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  phoneNumber: PropTypes.string,
  address: PropTypes.string,
  city: PropTypes.string,
  dob: PropTypes.string,
  age: PropTypes.string,
  heightFeet: PropTypes.string,
  heightInches: PropTypes.string,
  education: PropTypes.string,
  degree: PropTypes.string,
  id: PropTypes.number,
  completedDegree: PropTypes.bool,
};

export default Form;
