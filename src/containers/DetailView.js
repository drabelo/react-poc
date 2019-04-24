import { connect } from 'react-redux';
import * as actions from '../reducers/users';
import DetailView from '../components/DetailView/DetailView';

const mapStateToProps = state => ({
  user: state.users[state.usersList],
  index: state.usersList,
});

export default connect(
  () => mapStateToProps,
  actions
)(DetailView);
