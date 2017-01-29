import FlashMessages from 'components/FlashMessages';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as flashMessagesActions from 'actions/flashMessagesActionCreators';

const mapDispatchToProps = dispatch => (
  { ...bindActionCreators(flashMessagesActions, dispatch) }
);

const mapStateToProps = (state, ownProps) => ({
  flashMessages: state.flashMessages,
  ownProps,
});

export default connect(mapStateToProps, mapDispatchToProps)(FlashMessages);
