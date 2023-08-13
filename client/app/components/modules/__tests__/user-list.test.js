import React from 'react';
import { render, screen } from '../../../../setup/test-utils';
import { UsersList } from '../index';

const users = [
    {
        name: 'Name1',
        phone: '123 456 7890',
        email: 'test1@test.com',
        address: {
            street: 'street1',
            city: 'city1',
            zipcode: '123456'
        }
    },
    {
        name: 'Name2',
        phone: '123 123 1234',
        email: 'test2@test.com',
        address: {
            street: 'street2',
            city: 'city2',
            zipcode: '456789'
        }
    }
];

test('click event of button', () => {
    render(<UsersList data={users} />);
    expect(screen.getByTitle(/^name1$/i)).toBeInTheDocument();
    expect(screen.getByText(/123 456 7890/i)).toBeInTheDocument();
    expect(screen.getByText(/test1@test.com/i)).toBeInTheDocument();
    expect(screen.getByText(/street1/i)).toBeInTheDocument();
    expect(screen.getByText(/city1/i)).toBeInTheDocument();
    expect(screen.getByText(/123456/i)).toBeInTheDocument();
    expect(screen.getByTitle(/^name2$/i)).toBeInTheDocument();
    expect(screen.getByText(/123 123 1234/i)).toBeInTheDocument();
    expect(screen.getByText(/test2@test.com/i)).toBeInTheDocument();
    expect(screen.getByText(/street2/i)).toBeInTheDocument();
    expect(screen.getByText(/city2/i)).toBeInTheDocument();
    expect(screen.getByText(/456789/i)).toBeInTheDocument();
})