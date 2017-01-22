import React, { PropTypes } from 'react';
import Header from 'components/LoginLayout/Header';
import SideMenu from 'components/LoginLayout/SideMenu';
import { connect } from 'react-redux';
import 'stylesheets/global.scss'; // eslint-disable-line

class LoginLayout extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <SideMenu />
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

const mapStateToProps = (state, ownProps) => ({
  state,
  ownProps,
});

export default connect(mapStateToProps, {
})(LoginLayout);
