import React from 'react';
import { render, screen, fireEvent } from '../../../../setup/test-utils';
import { PageTitle } from '../index';

test('click event of button', () => {
    render(
        <PageTitle title="Users" />
    );
    expect(screen.getByText(/users/i)).toBeInTheDocument();
})