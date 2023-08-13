import {ApolloError} from "@apollo/client";
import { withApollo } from '@apollo/client/react/hoc';
import { UsersListProps } from '../../types/user-types';
import useCustomQuery from "../../hooks/useCustomQuery";
import { usersQuery } from '../../queries/users/users';
import { LOAD_SIZE } from '../../constants';
import { UsersList, LoadMoreButton, PageTitle } from "../modules";

const options = {
    variables: {
        offset: 0,
        limit: LOAD_SIZE
    },
    fetchPolicy: 'network-only'
};

const UsersListWithPagination = () => {
    const [data, loading, error, loadMore]: [
        UsersListProps|undefined, Boolean, ApolloError|undefined, Function
    ] = useCustomQuery(usersQuery, options);

    const renderLoading = () => <h2>Loading...</h2>;

    if (loading) return renderLoading();
    if (error) return <h2>Failed to load...!</h2>;

    const hasMore = data?.users?.count && data.users?.result?.length && data?.users?.count > data.users?.result?.length;

    return (
        <>
            <PageTitle title="Users with GraphQL pagination" />
            {data?.users && <UsersList data={data.users.result} />}
            {hasMore && <LoadMoreButton loadMore={loadMore} />}
        </>
    );
};

export default withApollo(UsersListWithPagination);
