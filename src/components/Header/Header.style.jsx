import styled from 'styled-components';

export const HeaderContainer = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 5%,
    rgba(217, 217, 251, 1) 15%,
    rgba(178, 178, 247, 1) 27%,
    rgba(98, 98, 255, 1) 40%,
    rgba(76, 76, 207, 1) 47%,
    rgba(29, 29, 191, 1) 59%,
    rgba(13, 13, 190, 1) 73%,
    rgba(255, 255, 255, 1) 97%,
    rgba(255, 255, 255, 1) 100%
  );
`;

export const MainNav = styled.ul`
  display: flex;
  gap: 30px;
  margin-right: 140px;
`;
export const LogoThumb = styled.div`
  width: 100px;
`;
export const Logo = styled.img`
  border-radius: 14%;
  object-fit: cover;
  transform: scaleX(-1);
`;

export const NavContainer = styled.div`
  display: flex;
`;
