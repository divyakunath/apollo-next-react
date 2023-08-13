import styled, { css } from 'styled-components';

type ColumnProps = {
    theme: {
        breakpoints: {
            xsmall?: number,
            small?: number,
            medium?: number,
            large?: number,
            xlarge?: number,
        }
    },
    xsmall?: number,
    small?: number,
    medium?: number,
    large?: number,
    xlarge?: number,
}

const Column = styled.div<ColumnProps>`
  width: 100%;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  ${({ theme: { breakpoints }, xsmall = 12, small, medium, large, xlarge }: ColumnProps) => css`
    max-width: calc(100% * (${xsmall} / 12));
    ${small && css`
      @media screen and (min-width: ${breakpoints.small}px) {
          max-width: calc(100% * (${small} / 12));
      }
    `}
    ${medium && css`
        @media screen and (min-width: ${breakpoints.medium}px) {
          max-width: calc(100% * (${medium} / 12));
        }
    `}
    ${large && css`
        @media screen and (min-width: ${breakpoints.large}px) {
          max-width: calc(100% * (${large} / 12));
        }
    `}
    ${xlarge && css`
        @media screen and (min-width: ${breakpoints.xlarge}px) {
          max-width: calc(100% * (${xlarge} / 12));
        }
    `}
  `}
`;

export default Column;