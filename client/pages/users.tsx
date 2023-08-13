import client from "../app/apollo-client";
import { usersQuery as query } from "../app/queries/users/users";
import { UsersListProps } from "../app/types/user-types";
import {UsersListLoaded } from '../app/components/templates';
import {Grid} from "../app/components/elements";

const Users = ({ users }: UsersListProps) => (
    <Grid>
        {users && <UsersListLoaded users={users} />}
    </Grid>
);

export const getStaticProps = async () => {
    const { data } = await client.query({ query, variables: { offset: 0, limit: 200 } });
    console.log(data)
    return {
        props: {
            users: data.users
        }
    }
};

export default Users;
