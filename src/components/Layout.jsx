import styled from 'styled-components';
import { NavLink, Outlet } from 'react-router-dom';
import UserMenu from './UserMenu';
import '../index.css';
const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;

  &.active {
    color: orange;
  }
`;

const Layout = () => {
  const isLoggedIn = false;
  return (
    <div>
      <header>
        <nav className=" HeaderNav">
          <StyledLink to="/" end>
            Home
          </StyledLink>

          {isLoggedIn ? (
            <UserMenu />
          ) : (
            <div className="HeaderLogin">
              <StyledLink to="/register">Register</StyledLink>
              <StyledLink to="/login">Log In</StyledLink>
            </div>
          )}
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
