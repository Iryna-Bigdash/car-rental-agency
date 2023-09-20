import styled from 'styled-components';

export const Container = styled.div`
position: relative;
margin: 0 auto;
width: 859px;
height: 74px;
text-align: center;
margin-bottom: 50px;
    
`
export const Button = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  margin-bottom: 5px;
  margin-right: 5px;
  padding: 0;
  background: none;
  border: none;

  svg {
    stroke: #3470ff;
    stroke-opacity: 0.8;
    stroke-width: 1px;
  }

  &:hover svg {
    stroke: #0B44CD;
  }

  

`
export const Menu = styled.div`
    width: 100%;
    padding: 20px;
    text-align: center;
    outline: 1px solid orange;
    color: white;
    background: grey;
`