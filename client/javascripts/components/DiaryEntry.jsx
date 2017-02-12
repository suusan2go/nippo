import React, { PropTypes } from 'react';

export default class Dirary extends React.Component {
  componentWillMount() {

  }

  render() {
    const { diary: { title, body } } = this.props;
    return (
      <div className="row">
        <div className="col-sm-12">
          <div className="page-heading">
            <h2>{title}</h2>
          </div>
        </div>
      </div>
    );
  }
}

Dirary.propTypes = {
  title: React.PropTypes.string.isRequired,
  body: React.PropTypes.string.isRequired,
};
