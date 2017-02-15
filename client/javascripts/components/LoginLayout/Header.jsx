import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

type Props = {
  currentUser: { name: string, avatar_url: string }
}

class Header extends React.Component {
  props: Props
  render() {
    const { currentUser } = this.props;
    return (
      <header className="topnavbar-wrapper">
        <Navbar collapseOnSelect className="navbar-fixed-top">
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Familog</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavDropdown eventKey={3} title={<img src={currentUser.avatar_url} className="img-circle-raised" />} id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>ログアウト</MenuItem>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    );
  }
}

export default Header;
