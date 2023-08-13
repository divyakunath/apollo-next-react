import styled, { css } from 'styled-components';

type GridProps = {
  theme: {
    breakpoints: {
      xsmall: number,
      small: number,
      medium: number,
      large: number,
      xlarge: number,
    }
    containerMaxWidth: {
      xsmall: number,
      small: number,
      medium: number,
      large: number,
      xlarge: number,
    }
  }
}

const Grid = styled.div`
  margin: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  width: 100%;
  ${({ theme: { containerMaxWidth, breakpoints } }: GridProps) => css`
    max-width: ${containerMaxWidth.xsmall}px;
    @media screen and (min-width: ${breakpoints.small}px) {
      max-width: ${containerMaxWidth.small}px;
    }
    @media screen and (min-width: ${breakpoints.medium}px) {
      max-width: ${containerMaxWidth.medium}px;
    }
    @media screen and (min-width: ${breakpoints.large}px) {
      max-width: ${containerMaxWidth.large}px;
    }
    @media screen and (min-width: ${breakpoints.xlarge}px) {
      max-width: ${containerMaxWidth.xlarge}px;
    }
  `}
`;

export default Grid;