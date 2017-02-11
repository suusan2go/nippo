import React, { PropTypes } from 'react';
import Header from 'components/LoginLayout/Header';
import FlashMessages from 'containers/FlashMessages';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as flashMessagesActions from 'actions/flashMessagesActionCreators';

class LoginLayout extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <FlashMessages />
        <Header />
        <section className="main">
          {this.props.children}
        </section>
      </div>
    );
  }
}

LoginLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

const mapDispatchToProps = dispatch => (
  { ...bindActionCreators(flashMessagesActions, dispatch) }
);

const mapStateToProps = (state, ownProps) => ({
  state,
  ownProps,
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginLayout);
