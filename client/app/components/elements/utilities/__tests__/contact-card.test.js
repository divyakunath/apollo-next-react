import React from 'react';
import renderer from 'react-test-renderer';
import { ContactCard } from '../index';

test('styles of paragraph component', () => {
    const contactCard = renderer.create(<ContactCard />).toJSON();
    expect(contactCard).toHaveStyleRule('border', '1px solid #b2b2b2');
    expect(contactCard).toHaveStyleRule('border-radius', '5px');
    expect(contactCard).toHaveStyleRule('box-shadow', '5px 4px 4px 1px #e2e2e2');
    expect(contactCard).toHaveStyleRule('margin-bottom', '2rem');
    expect(contactCard).toHaveStyleRule('padding', '1.5rem 2rem');
    expect(contactCard).toHaveStyleRule('opacity', '0.8');
    expect(contactCard).toHaveStyleRule('opacity', '1', {
        modifier: ':hover'
    });
    expect(contactCard).toHaveStyleRule('box-shadow', '5px 4px 4px 1px #d2d2d2', {
        modifier: ':hover'
    });
});
