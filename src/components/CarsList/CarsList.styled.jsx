import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 274px);
  grid-gap: 29px 50px;
  list-style: none;
  margin-top: 100px;
`;

export const Item = styled.li`
  width: calc(274px - 29px)/4;
  height: 426px;
  position: relative;
  overflow: hidden;
  border-radius: 14px;

  display: flex;
  flex-direction: column;
  
  &.active {
  transform: scale(1.05);
  transition: all 0.3s ease-in-out;
  }
`;
