import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './header.scss';
import GiffyLogo from 'images/giffy.png'

class Header extends React.Component {
  render() {
    return (
      <nav className={`${styles.header_wrapper} container grid-960`}>
        <header className={'navbar'}>
          <section className="navbar-section">
            <Link to="/" className="navbar-brand">
              <img src={GiffyLogo} className={styles.header_logo}/>
            </Link>
            <Link to="/gifts" className="btn btn-link">features</Link>
          </section>
          <section className="navbar-section">
            <div className="input-group input-inline">
              <input className="form-input" type="text" placeholder="search" />
              <button className="btn btn-primary input-group-btn">Search</button>
            </div>
          </section>
        </header>
      </nav>
    );
  }
}

export default Header;
