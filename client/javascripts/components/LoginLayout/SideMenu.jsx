import React, { PropTypes } from 'react';
import { Link } from 'react-router';

class Header extends React.Component {
  render() {
    return (
      <aside className="aside">
        { /* START Sidebar (left) */ }
        <div className="aside-inner">
          <nav data-sidebar-anyclick-close="" className="sidebar">
            { /* START sidebar nav */ }
            <ul className="nav">
              { /* START user info */ }
              <li className="nav-heading ">
                <span data-localize="sidebar.heading.HEADER">日報一覧</span>
              </li>
              <li>
                <div className="nav-item">
                  <div className="pull-right label label-info">1</div>
                  <em className="fa fa-sticky-note" />
                  <span data-localize="sidebar.nav.MENU">けんたの日報</span>
                </div>
              </li>
              <li>
                <div className="nav-item">
                  <div className="pull-right label label-info">1</div>
                  <em className="fa fa-sticky-note" />
                  <span data-localize="sidebar.nav.MENU">あやのの日報</span>
                </div>
              </li>
            </ul>
            <ul className="nav">
              { /* START user info */ }
              <li className="nav-heading ">
                <span data-localize="sidebar.heading.HEADER">サブメニュー</span>
              </li>
              <li>
                <div className="nav-item">
                  <div className="pull-right label label-info">1</div>
                  <em className="fa fa-star" />
                  <span data-localize="sidebar.nav.MENU">お気に入り</span>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    );
  }
}

export default Header;
