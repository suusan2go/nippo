import React, { PropTypes } from 'react';
import Header from 'components/LoginLayout/Header';
import FlashMessages from 'containers/FlashMessages';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as flashMessagesActions from 'actions/flashMessagesActionCreators';

class FullLayout extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <FlashMessages />
        <div className="container-fluid main">
          {this.props.children}
        </div>
      </div>
    );
  }
}

FullLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

const mapDispatchToProps = dispatch => (
  { ...bindActionCreators(flashMessagesActions, dispatch) }
);

const mapStateToProps = (state, ownProps) => ({
  state,
  ownProps,
});

export default connect(mapStateToProps, mapDispatchToProps)(FullLayout);
