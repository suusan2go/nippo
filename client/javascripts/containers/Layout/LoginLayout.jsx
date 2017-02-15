import React, { PropTypes } from 'react';
import Header from 'components/LoginLayout/Header';
import FlashMessages from 'containers/FlashMessages';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as flashMessagesActions from 'actions/flashMessagesActionCreators';

type Props = {
  currentUser: object
}

class LoginLayout extends React.Component {
  props: Props
  render() {
    return (
      <div className="wrapper">
        <FlashMessages />
        <Header currentUser={this.props.currentUser} />
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
  currentUser: state.currentUser,
  ownProps,
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginLayout);
