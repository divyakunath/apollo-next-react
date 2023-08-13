import { ThemeProvider } from 'styled-components'
import { ApolloProvider } from '@apollo/client/react';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import client from '../app/apollo-client';
import { GlobalStyle } from '../app/global-style';
import theme from '../app/theme';

const MyApp = ({ Component, pageProps }: AppProps) => {
    const router = useRouter();
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <ApolloProvider client={client}>
                    <Component {...pageProps} key={router.asPath} />
                </ApolloProvider>
            </ThemeProvider>
        </>
    );
}

export default MyApp;
