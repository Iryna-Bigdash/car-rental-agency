import { NavLink } from 'react-router-dom';
import {
    HeaderContainer,
    Logo,
    LogoThumb,
    MainNav,
  } from './Header.style';
  import logo from '../../assets/images/logo.png';

  const linkStyles = {
    fontWeight: '800',
    color: 'blue',
    fontSize: "20px",
    textDecoration: 'none',
  }

export const Header =()=>{
    return(
        <HeaderContainer>
        <NavLink to="/">
          <LogoThumb>
            <Logo src={logo} />
          </LogoThumb>
          </NavLink>
          <MainNav>
            <li>
              <NavLink to="/" style={linkStyles}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/catalog" style={linkStyles}>Catalog</NavLink>
            </li>
            <li>
              <NavLink to="/favorites" style={linkStyles}>Favorites</NavLink>
            </li>
          </MainNav>
        </HeaderContainer>
    )
}