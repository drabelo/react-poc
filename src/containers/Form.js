import { connect } from 'react-redux';
import * as actions from '../reducers/users';
import Form from '../components/AddUserForm/AddUserForm';

const mapStateToProps = () => ({});

export default connect(
  mapStateToProps,
  actions
)(Form);
