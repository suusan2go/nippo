import React from 'react';
import { Link } from 'react-router';
import { Navbar, Nav, NavDropdown, MenuItem as OriginalMenuItem } from 'react-bootstrap';
import Style from './header.scss';


// http://stackoverflow.com/questions/35687353/react-bootstrap-link-item-in-a-navitem
export const MenuItem = ({ href, ...props }: { href: strng }, { router }) => (
  <OriginalMenuItem onClick={() => router.transitionTo(href)} href={href} {...props} />
);

type Props = {
  currentUser: { name: string, avatar_url: string },
  actions: { requestSignOut: Action }
}

const Header = (props: Props) => {
  const { currentUser } = props;
  const { actions: { requestSignOut } } = props;
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
            <NavDropdown
              eventKey={3}
              className={Style.avatar_link}
              title={<img src={currentUser.avatar_url} className="img-circle" alt={currentUser.name} />}
              id="basic-nav-dropdown"
            >
              <MenuItem eventKey={3.1} href="/">Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3} onClick={requestSignOut}>
                ログアウト
              </MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
