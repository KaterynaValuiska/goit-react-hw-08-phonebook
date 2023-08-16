import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;

  &.active {
    color: orange;
  }
`;

export const Navigation = () => {
  const { isLoggedIn } = useSelector(state => state.auth);

  return (
    <nav className="Navigation">
      <StyledLink to="/">Home</StyledLink>
      {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
    </nav>
  );
};
