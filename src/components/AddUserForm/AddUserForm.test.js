import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import UserForm from './AddUserForm';

beforeEach(() => {
  fetch.resetMocks();
  fetch.mockResponseOnce(JSON.stringify({ test: '123' }));
})

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UserForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('does not allow submission without the required fields', () => {
  const wrapper = mount(<UserForm />);
  global.alert = jest.fn();
  wrapper.setState({ firstName: 'Dailton' });
  wrapper.instance().handleSubmit({ preventDefault: () => {} });
  expect(global.alert).toBeCalled();
  expect(fetch.mock.calls.length).toEqual(0)
});

it('allows submission with the required fields', () => {
  const wrapper = mount(<UserForm addUser={() => {}} />);
  global.alert = jest.fn();
  global.scrollTo = jest.fn();
  wrapper.setState({
    firstName: 'Dailton',
    lastName: 'Rabelo',
    phoneNumber: '652346565',
    city: 'Raleigh',
    address: '23452435',
    dob: '2019-04-27',
  });
  wrapper.instance().handleSubmit({ preventDefault: () => {} });
  expect(global.alert).not.toBeCalled();
  expect(fetch.mock.calls.length).toEqual(1)
});
