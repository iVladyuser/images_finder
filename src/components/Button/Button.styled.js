import styled from 'styled-components';

export const WrapperButton = styled.div`
    text-align: center;
    margin: 20px auto;
`;

export const ButtonStyle = styled.button`
  padding: 8px 16px;
  margin: 20 auto;
  border-radius: 2px;
  background: rgba(6, 71, 80, 0.75);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  &:hover {
    background: rgba(6, 71, 80, 0.959);
  }
  &:focus {
    background: rgba(6, 71, 80, 0.959);
  }
`;