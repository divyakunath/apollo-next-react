import { offsetLimitPagination } from "@apollo/client/utilities";
import { UsersType } from '../../../../../../types/user-types';

export default {
    ...offsetLimitPagination(),
    read: (existing: UsersType): UsersType =>  existing,
    merge: (existing: UsersType, incoming: UsersType): UsersType => {
        if (existing) {
            return {
                ...incoming,
                result: [
                    ...existing.result,
                    ...incoming.result
                ]
            };
        }
        return incoming;
    }
}