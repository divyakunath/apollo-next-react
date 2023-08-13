import React from 'react';
import renderer from 'react-test-renderer';
import { Heading1 } from '../index';

test('styles of heading 1 component', () => {
    const heading = renderer.create(<Heading1 />).toJSON();
    expect(heading).toHaveStyleRule('color', '#212121');
    expect(heading).toHaveStyleRule('font-size', '4rem');
    expect(heading).toHaveStyleRule('font-weight', '700');
    expect(heading).toHaveStyleRule('line-height', '6rem');
    expect(heading).toHaveStyleRule('margin-bottom', '1.5rem');
});
