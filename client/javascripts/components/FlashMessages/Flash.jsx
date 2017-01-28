import React from 'react';

const autoCloseSeconds = 10;
export default class Flash extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickClose = this.handleClickClose.bind(this);
  }

  componentDidMount() {
    setTimeout(() => this.props.removeFlashMessage(this.props.id), autoCloseSeconds * 1000);
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
