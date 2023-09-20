import styled from 'styled-components';

export const Section = styled.section`
  height: 100%;
`

export const Icon = styled.button`
  width: 18px;
  height: 18px;
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 14px;
  margin-right: 14px;
  padding: 0;
  background: none;
  border: none;

  svg {
    stroke: #ffffff;
    stroke-opacity: 0.8;
    stroke-width: 1.5px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 268px;
  border-radius: 14px;
  object-fit: cover;
  margin-bottom: 14px;
`;

export const TitleThumb = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const Title = styled.h2`
  font-family: Manrope;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: #121417;
`;
export const Model = styled.span`
  color: #3470ff;
`;
export const Price = styled.span`
  font-family: Manrope;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: #121417;
`;
export const DescriptionList = styled.div`
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  font-family: Manrope;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: #121417;
  opacity: 0.5;
  margin-bottom: 28px;
`;
export const Description = styled.span`
  border-right: 1px solid rgba(18, 20, 23, 0.1);
  padding-right: 6px;

 
  &:last-child{
    border-right: none;
  }

  &:nth-child(4n) {
      border-right: none;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 44px;
  background: #3470ff;
  border-radius: 14px;
  border: none;

  font-family: Manrope;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.4286;
  color: #fff;

  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;
