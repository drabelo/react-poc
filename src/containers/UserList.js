import { connect } from 'react-redux';
import * as actions from '../reducers/usersList';
import Form from '../components/UserList/UserList';

const mapStateToProps = state => ({
  users: state.users,
});

export default connect(
  () => mapStateToProps,
  actions
)(Form);
