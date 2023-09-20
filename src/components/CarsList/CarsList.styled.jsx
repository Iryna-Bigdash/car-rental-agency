import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(4, 274px);
  grid-column-gap: 29px;
  grid-row-gap: 50px;
`;

export const Item = styled.li`
  width: calc(274px - 29px)/4;
  height: 426px;
  position: relative;
  overflow: hidden; 
`;
