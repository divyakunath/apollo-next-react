import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '../../../../../setup/test-utils';
import { Button } from '../index';

test('styles of paragraph component', () => {
    const button = renderer.create(<Button type="button">Click</Button>).toJSON();
    expect(button).toHaveStyleRule('background', '#f2f2f2');
    expect(button).toHaveStyleRule('border', '1px solid #c2c2c2');
    expect(button).toHaveStyleRule('border-radius', '4px');
    expect(button).toHaveStyleRule('box-shadow', '5px 4px 4px 1px #e2e2e2');
    expect(button).toHaveStyleRule('font-size', '1.8rem');
    expect(button).toHaveStyleRule('font-weight', '500');
    expect(button).toHaveStyleRule('line-height', '2.7rem');
    expect(button).toHaveStyleRule('padding', '1rem 2rem');
    expect(button).toHaveStyleRule('opacity', '0.7');
    expect(button).toHaveStyleRule('opacity', '1', {
        modifier: ':hover'
    });
    expect(button).toHaveStyleRule('font-weight', '700', {
        modifier: ':hover'
    });
    expect(button).toHaveStyleRule('opacity', '1', {
        modifier: ':focus'
    });
    expect(button).toHaveStyleRule('font-weight', '700', {
        modifier: ':focus'
    });
    expect(button).toHaveStyleRule('opacity', '1', {
        modifier: ':active'
    });
    expect(button).toHaveStyleRule('font-weight', '700', {
        modifier: ':active'
    });
    expect(button).toHaveStyleRule('box-shadow', 'none', {
        modifier: ':active'
    });
});

test('click event of button', () => {
    const mockFn = jest.fn();
    render(
        <Button type="button" onClick={mockFn}>Click Me</Button>
    );
    fireEvent.click(screen.getByText(/click me/i));
    expect(mockFn).toBeCalled();
})