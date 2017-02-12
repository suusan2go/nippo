import React from 'react';
import style from './style.scss';

const autoCloseSeconds = 10;
const transitionSeconds = 0.3;
export default class Flash extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickClose = this.handleClickClose.bind(this);
    this.state = { styles: { } };
  }

  componentDidMount() {
    setTimeout(() => this.handleClickClose, autoCloseSeconds * 1000);
  }

  handleClickClose() {
    this.setState({ styles: { opacity: 0.01 } });
    setTimeout(() => this.props.removeFlashMessage(this.props.id), transitionSeconds * 1000);
  }

  render() {
    const { type, messages } = this.props;
    return (
      <div className={`alert alert-dismissible alert-${type} ${style.flash}`} style={this.state.styles}>
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
