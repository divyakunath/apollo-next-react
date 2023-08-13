import { ApolloClient } from '@apollo/client';
import cache from './cache';
const client = new ApolloClient({
    uri: process.env.apolloBaseURL,
    cache
});

export default client;