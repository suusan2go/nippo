import DiraryEntryForm from 'components/DiaryEntryForm';
import * as actionCreators from 'actions/diaryEntryFormActionCreators';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
  diaryEntryForm: state.diaryEntryForm,
  ownProps,
});

const mapDispatchToProps = dispatch => (
  { actions: bindActionCreators(actionCreators, dispatch) }
);

export default connect(mapStateToProps, mapDispatchToProps)(DiraryEntryForm);
