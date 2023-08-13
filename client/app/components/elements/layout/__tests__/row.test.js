import React from 'react';
import renderer from 'react-test-renderer'
import { Row } from '../index';

test('styles of row component', () => {
    const row = renderer.create(<Row />).toJSON();
    expect(row).toHaveStyleRule('display', 'flex');
    expect(row).toHaveStyleRule('flex-wrap', 'wrap');
    expect(row).toHaveStyleRule('margin-right', '-1.5rem');
    expect(row).toHaveStyleRule('margin-left', '-1.5rem');
});
