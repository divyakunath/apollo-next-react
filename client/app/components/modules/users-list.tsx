import { User } from '../../types/user-types';
import { Row } from '../elements';
import { UserCard } from './index';

const UsersList = ({ data }: { data: Array<User> }) => (
    <Row>
        {data.map(user => <UserCard key={user.phone.toString()} user={user} />)}
    </Row>
);

export default UsersList;
