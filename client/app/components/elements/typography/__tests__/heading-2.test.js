import React from 'react';
import renderer from 'react-test-renderer';
import { Heading2 } from '../index';

test('styles of heading 2 component', () => {
    const heading = renderer.create(<Heading2 />).toJSON();
    expect(heading).toHaveStyleRule('color', '#212121');
    expect(heading).toHaveStyleRule('font-size', '2.5rem');
    expect(heading).toHaveStyleRule('font-weight', '700');
    expect(heading).toHaveStyleRule('line-height', '4rem');
    expect(heading).toHaveStyleRule('margin-bottom', '1rem');
});
