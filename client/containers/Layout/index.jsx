import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import './global.scss'; // eslint-disable-line
import Header from 'components/layouts/Header';

class Layout extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  state,
  ownProps,
});

export default connect(mapStateToProps, {
})(Layout);
