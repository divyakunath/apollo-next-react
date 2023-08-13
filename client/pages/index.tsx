import Link from 'next/link'

const Page = () => (
    <div>
        Welcome
        <br/><br/>
            <Link href="/users"><a>Users</a></Link>
            <br />
            <Link href="/users-paginated"><a>Users with GraphQL pagination</a></Link>
    </div>
);

export default Page;
