import Header from 'components/Layout/Header';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActions from 'actions/authActionCreators';

const mapDispatchToProps = dispatch => (
  { ...bindActionCreators(authActions, dispatch) }
);

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.currentUser,
  ownProps,
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
