import { useReducer, useCallback } from 'react';
import { UsersType } from '../../types/user-types';
import { LOAD_SIZE } from '../../constants';
import { UsersList, LoadMoreButton, PageTitle} from "../modules";

const userReducer = (state = [], { type, payload }) => {
    const strategy = {
        default: () => state,
        loadMore: () => [...state, ...payload]
    };
    return strategy[type] ? strategy[type]() : strategy.default();
}

const UsersListLoaded = ({ users: { result, count } }: { users: UsersType }) => {
    const [data, setData] = useReducer(userReducer, [...result.slice(0, LOAD_SIZE)]);

    const hasMore = data.length < count;

    const loadMore = useCallback(() => setData({
        type: 'loadMore',
        payload: [...result.slice(data.length, data.length + LOAD_SIZE)]
    }),[setData, result, data]);

    return (
        <>
            <PageTitle title="Users" />
            <UsersList data={data} />
            {hasMore && <LoadMoreButton loadMore={loadMore} />}
        </>
    );
};

export default UsersListLoaded;
