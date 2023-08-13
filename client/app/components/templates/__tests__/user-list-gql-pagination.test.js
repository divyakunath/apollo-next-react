import React from 'react';
import { MockedProvider } from '@apollo/client/testing';
import { render, screen, fireEvent, act } from '../../../../setup/test-utils';
import { UsersListWithPagination } from '../index';
import { usersQuery as query } from '../../../queries/users/users';
import users from './users.json';

const mocks = [
    {
        request: {
            query,
            variables: {
                offset: 0,
                limit: 20
            },
            fetchPolicy: 'network-only'
        },
        result: {
            data: {
                users: {
                    ...users,
                    result: [...users.result.slice(0, 20)]
                }
            }
        }
    },
    {
        request: {
            query,
            variables: {
                offset: 20,
                limit: 20
            }
        },
        result: {
            data: {
                users: {
                    ...users,
                    result: [...users.result.slice(20, 40)]
                }
            }
        }
    },
];

test('user list loaded with queries from graphql', async () => {
    render(
        <MockedProvider mocks={mocks} addTypename={false}>
            <UsersListWithPagination />
        </MockedProvider>

    );

    await new Promise(resolve => setTimeout(resolve, 0));
    expect(screen.getByText(/Users/i)).toBeVisible();
    expect(screen.getAllByTitle(/mail to/i).length).toBe(40);
    act(() => {
        fireEvent.click(screen.getByText(/load more/i));
    });
})