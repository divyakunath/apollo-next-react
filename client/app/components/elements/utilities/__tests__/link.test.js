import React from 'react';
import renderer from 'react-test-renderer';
import { Link } from '../index';

test('styles of paragraph component', () => {
    const link = renderer.create(<Link />).toJSON();
    expect(link).toHaveStyleRule('color', 'inherit');
    expect(link).toHaveStyleRule('cursor', 'pointer');
    expect(link).toHaveStyleRule('font-size', 'inherit');
    expect(link).toHaveStyleRule('font-weight', 'inherit');
    expect(link).toHaveStyleRule('line-height', '2.7rem');
    expect(link).toHaveStyleRule('text-decoration', 'underline');
    expect(link).toHaveStyleRule('opacity', '0.7');
    expect(link).toHaveStyleRule('opacity', '1', {
        modifier: ':hover'
    });
    expect(link).toHaveStyleRule('opacity', '1', {
        modifier: ':focus'
    });
    expect(link).toHaveStyleRule('opacity', '1', {
        modifier: ':active'
    });
});
