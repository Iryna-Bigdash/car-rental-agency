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
min-height: 752px;
width: 100%;
padding: 16px;
background-color: white;
border-radius: 24px;
`


