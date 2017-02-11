// @flow
import DiaryEntryList from 'components/DiaryEntryList';
import * as actionCreators from 'actions/diaryEntryListActionCreators';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
  ...state.diaryEntryList,
  ownProps,
});

const mapDispatchToProps = dispatch => (
  { actions: bindActionCreators(actionCreators, dispatch) }
);

export default connect(mapStateToProps, mapDispatchToProps)(DiaryEntryList);
