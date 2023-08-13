import { InMemoryCache } from '@apollo/client';
import typePolicies from './type-policies';

export default new InMemoryCache({
    typePolicies
});