import styled from 'styled-components';

const Link = styled.a`
  color: inherit;
  cursor: pointer;
  font-size: inherit;
  font-weight: inherit;
  line-height: 2.7rem;
  opacity: 0.7;
  text-decoration: underline;
  &:hover, &:focus, &:active {
    opacity: 1;
  }
`;

export default Link;