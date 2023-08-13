import styled from 'styled-components';

const Button = styled.button`
  background: #f2f2f2;
  border: 1px solid #c2c2c2;
  border-radius: 4px;
  box-shadow: 5px 4px 4px 1px #e2e2e2;
  cursor: pointer;
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 2.7rem;
  opacity: 0.7;
  padding: 1rem 2rem;
  &:hover, &:focus, &:active {
    font-weight: 700;
    opacity: 1;
  }
  &:active {
    box-shadow: none;
  }
`;

export default Button;