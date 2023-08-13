import React from 'react';
import renderer from 'react-test-renderer';
import { Paragraph } from '../index';

test('styles of paragraph component', () => {
    const paragraph = renderer.create(<Paragraph />).toJSON();
    expect(paragraph).toHaveStyleRule('color', '#212121');
    expect(paragraph).toHaveStyleRule('font-size', '1.6rem');
    expect(paragraph).toHaveStyleRule('font-weight', '400');
    expect(paragraph).toHaveStyleRule('line-height', '2.4rem');
    expect(paragraph).toHaveStyleRule('margin-bottom', '0.8rem');
    expect(paragraph).toHaveStyleRule('overflow', 'hidden');
    expect(paragraph).toHaveStyleRule('text-overflow', 'ellipsis');
});
