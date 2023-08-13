import React from 'react';
import {render, screen, fireEvent, act} from '../../../../setup/test-utils';
import { UsersListLoaded } from '../index';
import users from './users.json';

test('click event of button', () => {
    render(<UsersListLoaded users={users} />);
    expect(screen.getByText(/Users/i)).toBeInTheDocument();
    expect(screen.getAllByTitle(/mail to/i).length).toBe(40);
    act(() => {
        fireEvent.click(screen.getByText(/load more/i));
    });
    expect(screen.getAllByTitle(/mail to/i).length).toBe(80);
})