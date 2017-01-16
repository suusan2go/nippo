import React, { PropTypes } from 'react';
import Header from 'components/DefaultLayout/Header';
import { connect } from 'react-redux';
import 'stylesheets/global.scss'; // eslint-disable-line

class DefaultLayout extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  state,
  ownProps,
});

export default connect(mapStateToProps, {
})(DefaultLayout);
