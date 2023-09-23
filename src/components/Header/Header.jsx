import { NavLink } from 'react-router-dom';
import {
  HeaderContainer,
  Logo,
  LogoThumb,
  MainNav,
  NavContainer,
} from './Header.style';
import logo from '../../assets/images/logo.png';
import Switcher from 'components/Switcher';
import { styled } from 'styled-components';

const StyledLink = styled(NavLink)`
  font-weight: 800;
  color: white;
  font-size: 20px;
  text-decoration: none;

  &.active {
    color: #fad833;
  }
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <LogoThumb>
          <Logo src={logo} loading="lazy" />
        </LogoThumb>
      </NavLink>
      <NavContainer>
        <MainNav>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/catalog">Catalog</StyledLink>
          </li>
          <li>
            <StyledLink to="/favorites">Favorites</StyledLink>
          </li>
        </MainNav>
        <div>
          <Switcher />
        </div>
      </NavContainer>
    </HeaderContainer>
  );
};
