import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components';
import theme from '../app/theme';

const AllTheProviders = ({ children }) => (
    <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
);

const customRender = (ui, options) => render(
    ui, { wrapper: AllTheProviders, ...options }
);

export * from '@testing-library/react'
export { customRender as render }