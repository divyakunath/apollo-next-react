import React from 'react';
import { render, screen } from '../../../../setup/test-utils';
import { UserCard } from '../index';

const user = {
    name: 'Test',
    phone: '123 456 7890',
    email: 'test@test.com',
    address: {
        street: 'street',
        city: 'city',
        zipcode: '123456'
    }
};

test('click event of button', () => {
    render(<UserCard user={user} />);
    expect(screen.getByTitle(/^test$/i)).toBeInTheDocument();
    expect(screen.getByText(/123 456 7890/i)).toBeInTheDocument();
    expect(screen.getByText(/test@test.com/i)).toBeInTheDocument();
    expect(screen.getByText(/street/i)).toBeInTheDocument();
    expect(screen.getByText(/city/i)).toBeInTheDocument();
    expect(screen.getByText(/123456/i)).toBeInTheDocument();
})