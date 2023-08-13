type Address = {
    street: string,
    city: string,
    zipcode: string
}

export type User = {
    name: string,
    email: string,
    phone: string,
    address: Address
}

export type UsersType = {
    count: number,
    result: Array<User>
}

export type UsersListProps = {
    [key: string]: any,
    users?: UsersType
}
