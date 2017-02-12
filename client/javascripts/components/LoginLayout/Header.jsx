import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { DropdownButton, MenuItem, ButtonGroup, Button } from 'react-bootstrap';
import styles from './header.scss';

class Header extends React.Component {
  render() {
    return (
      <header className="topnavbar-wrapper">
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <div className="pull-left">
              <Link className="navbar-brand" to="/">Nippo</Link>
            </div>
            <div className="pull-right">
              <Link className="navbar-brand" to="/users"><i className="fa fa-user" /></Link>
            </div>
          </div>
        </nav>
        <div className={`visible-xs ${styles.sub_nav}`}>
          <ButtonGroup justified className="btn-group-raised">
            <DropdownButton title={<i className="fa fa-sticky-note">日報</i>} id="bg-justified-dropdown" className="btn btn-link">
              <MenuItem eventKey="1">Dropdown link</MenuItem>
              <MenuItem eventKey="2">Dropdown link</MenuItem>
            </DropdownButton>
            <Button href="#" className="btn btn-link"><i className="fa fa-star" />お気に入り</Button>
          </ButtonGroup>
        </div>
      </header>
    );
  }
}

export default Header;
