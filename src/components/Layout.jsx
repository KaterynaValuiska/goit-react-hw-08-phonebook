import styled from 'styled-components';
import { NavLink, Outlet } from 'react-router-dom';
import UserMenu from './UserMenu';
import '../index.css';
import { Navigation } from './Navigation';
import { useSelector } from 'react-redux';
import { Suspense } from 'react';
import { ThemeContext, themes } from './ThemeContext';
import Toggle from '../components/Togle/index';

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
    <div className="Main">
      <header className=" HeaderNav">
        <div className=" HeaderNavTema">
          <ThemeContext.Consumer>
            {({ theme, setTheme }) => (
              <Toggle
                onChange={() => {
                  if (theme === themes.light) setTheme(themes.dark);
                  if (theme === themes.dark) setTheme(themes.light);
                }}
                value={theme === themes.dark}
              />
            )}
          </ThemeContext.Consumer>
          <Navigation />
        </div>
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
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
