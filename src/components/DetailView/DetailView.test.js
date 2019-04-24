import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import DetailView from './DetailView';

beforeEach(() => {
  fetch.resetMocks();
  fetch.mockResponseOnce(JSON.stringify({ test: '123' }));
})

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DetailView />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('does not allow saving without the required fields', () => {
  const wrapper = mount(<DetailView />);
  global.alert = jest.fn();
  wrapper.setState({ firstName: 'Dailton' });
  wrapper.instance().handleSubmit({ preventDefault: () => {} });
  expect(global.alert).toBeCalled();
});

it('allows saving with the required fields', () => {
  const wrapper = mount(<DetailView updateUser={() => {}} />);
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
