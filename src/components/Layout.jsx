import styled from 'styled-components';
import { NavLink, Outlet } from 'react-router-dom';
import UserMenu from './UserMenu';
import '../index.css';
import { Navigation } from './Navigation';
import { useSelector } from 'react-redux';

const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;

  &.active {
    color: orange;
  }
`;

const Layout = () => {
  const { isLoggedIn } = useSelector(state => state.auth);
  return (
    <div>
      <header className=" HeaderNav">
        <Navigation />
        {isLoggedIn ? (
          <UserMenu />
        ) : (
          <div className="HeaderLogin">
            <StyledLink to="/register">Register</StyledLink>
            <StyledLink to="/login">Log In</StyledLink>
          </div>
        )}
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
