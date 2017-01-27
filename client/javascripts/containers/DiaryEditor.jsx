import DiraryEditor from 'components/DiaryEditor';
import * as actionCreators from 'actions/diaryEditorActionCreators';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
  diaryEditor: state.diaryEditor,
  ownProps,
});

const mapDispatchToProps = dispatch => (
  { actions: bindActionCreators(actionCreators, dispatch) }
);

export default connect(mapStateToProps, mapDispatchToProps)(DiraryEditor);
