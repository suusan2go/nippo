import ArticleList from 'components/ArticleList';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
  state,
  ownProps,
});

export default connect(mapStateToProps, {
})(ArticleList);
