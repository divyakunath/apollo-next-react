import React from 'react';
import { render, screen, fireEvent } from '../../../../setup/test-utils';
import { LoadMoreButton } from '../index';

test('click event of load more button', () => {
    const mockFn = jest.fn();
    render(
        <LoadMoreButton loadMore={mockFn} />
    );
    expect(screen.getByText(/load more/i)).toBeInTheDocument();
    fireEvent.click(screen.getByText(/load more/i));
    expect(mockFn).toBeCalled();
});
