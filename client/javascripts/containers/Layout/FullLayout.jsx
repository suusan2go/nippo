import React, { PropTypes } from 'react';
import Header from 'components/LoginLayout/Header';
import FlashMessages from 'components/FlashMessages';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as flashMessagesActions from 'actions/flashMessagesActionCreators';

class FullLayout extends React.Component {
  render() {
    const { removeFlashMessage, flashMessages } = this.props;
    return (
      <div className="wrapper">
        <Header />
        <FlashMessages flashMessages={flashMessages} removeFlashMessage={removeFlashMessage} />
        <div className="container-fluid main">
          {this.props.children}
        </div>
      </div>
    );
  }
}

FullLayout.propTypes = {
  children: PropTypes.element.isRequired,
  removeFlashMessage: PropTypes.func.isRequired,
  flashMessages: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      type: React.PropTypes.string.isRequired,
      message: React.PropTypes.string.isRequired,
    }),
  ),
};

const mapDispatchToProps = dispatch => (
  { ...bindActionCreators(flashMessagesActions, dispatch) }
);

const mapStateToProps = (state, ownProps) => ({
  flashMessages: state.flashMessages,
  ownProps,
});

export default connect(mapStateToProps, mapDispatchToProps)(FullLayout);
