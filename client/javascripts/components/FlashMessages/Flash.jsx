import React from 'react';

export default class Flash extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickClose = this.handleClickClose.bind(this);
  }

  handleClickClose() {
    this.props.removeFlashMessage(this.props.id);
  }

  render() {
    const { type, messages } = this.props;
    return (
      <div className={`alert alert-dismissible alert-${type}`}>
        <button type="button" className="close" onClick={this.handleClickClose}>×</button>
        {messages}
      </div>
    );
  }
}

Flash.propTypes = {
  id: React.PropTypes.string.isRequired,
  type: React.PropTypes.string.isRequired,
  messages: React.PropTypes.string.isRequired,
  removeFlashMessage: React.PropTypes.func.isRequired,
};
