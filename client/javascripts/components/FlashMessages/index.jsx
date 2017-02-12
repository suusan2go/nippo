import React from 'react';
import style from './style.scss';
import Flash from './Flash';

export default class FlashMessages extends React.Component {
  render() {
    const { flashMessages, removeFlashMessage } = this.props;
    return (
      <div className={style.flash_container}>
        {
          flashMessages.map(f => (
            <Flash
              key={f.id}
              removeFlashMessage={removeFlashMessage}
              {...f}
            />
          ))
        }
      </div>
    );
  }
}

FlashMessages.propTypes = {
  flashMessages: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      type: React.PropTypes.string.isRequired,
      message: React.PropTypes.string.isRequired,
    }),
  ),
  removeFlashMessage: React.PropTypes.func.isRequired,
};
