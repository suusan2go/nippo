import DiraryEditor from 'components/DiaryEditor';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
  state,
  ownProps,
});

export default connect(mapStateToProps, {
})(DiraryEditor);
