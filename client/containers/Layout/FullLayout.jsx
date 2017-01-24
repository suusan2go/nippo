import React, { PropTypes } from 'react';
import Header from 'components/LoginLayout/Header';
import { connect } from 'react-redux';

class FullLayout extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
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

const mapStateToProps = (state, ownProps) => ({
  state,
  ownProps,
});

export default connect(mapStateToProps, {
})(FullLayout);
