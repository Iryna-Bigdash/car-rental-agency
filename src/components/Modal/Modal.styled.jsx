import styled from 'styled-components';

export const Backdrop = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
background: rgba(141, 143, 148, 0.5);
`

export const Container = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
max-width: 541px;
width: 100%;
background-color: white;
border-radius: 24px;
`

export const Close = styled.button`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 16px;
  margin-right: 16px;
  padding: 0;
  background: none;
  border: none;

  svg {
    stroke: #121417;
    stroke-opacity: 0.8;
    stroke-width: 1.5px;
  }  
`


