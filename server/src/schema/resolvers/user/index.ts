import { faker } from '@faker-js/faker'

type User = {
    userId: string,
    username: string,
    name: string,
    phone: string,
    email: string,
    avatar: string,
    password: string,
    birthdate: Date,
    registeredAt: Date,
    address: {
        street: string
        city: string
        zipcode: string
    }
}

export function createRandomUser(): User {
    return {
        userId: faker.string.uuid(),
        name: faker.person.fullName(),
        phone: faker.phone.number(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
        password: faker.internet.password(),
        birthdate: faker.date.birthdate(),
        registeredAt: faker.date.past(),
        address: {
            street:faker.location.street(),
            city:faker.location.city(),
            zipcode:faker.location.zipCode(),
        }
    };
}

export const users: User[] = faker.helpers.multiple(createRandomUser, {
    count: 200,
});

const getAllUsers = () => users;

const getUsers = (offset, limit) => users.slice(offset, offset+limit);

export default (_, { offset, limit }) => {
    console.log({offset, limit})
    const result = limit ? getUsers(offset, limit) : getAllUsers();
    return {
        result,
        count: users.length
    }
};