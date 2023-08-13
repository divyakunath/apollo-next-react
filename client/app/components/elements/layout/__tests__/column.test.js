import React from 'react';
import renderer from 'react-test-renderer'
import { Column } from '../index';
import theme from '../../../../theme';

test('styles of column component', () => {
    const column = renderer.create(
        <Column medium={6} theme={theme} />
    ).toJSON();
    expect(column).toHaveStyleRule('width', '100%');
    expect(column).toHaveStyleRule('padding-left', '1.5rem');
    expect(column).toHaveStyleRule('padding-right', '1.5rem');
    expect(column).toHaveStyleRule('max-width', 'calc(100% * (12 / 12))');
    expect(column).toHaveStyleRule('max-width', 'calc(100% * (6 / 12))', {
        media: 'screen and (min-width: 1000px)'
    });
});

test('styles of column component at different breakpoints', () => {
    const column = renderer.create(
        <Column xsmall={6} small={5} medium={4} large={3} xlarge={2} theme={theme} />
    ).toJSON();
    expect(column).toHaveStyleRule('max-width', 'calc(100% * (6 / 12))');
    expect(column).toHaveStyleRule('max-width', 'calc(100% * (5 / 12))', {
        media: 'screen and (min-width: 800px)'
    });
    expect(column).toHaveStyleRule('max-width', 'calc(100% * (4 / 12))', {
        media: 'screen and (min-width: 1000px)'
    });
    expect(column).toHaveStyleRule('max-width', 'calc(100% * (3 / 12))', {
        media: 'screen and (min-width: 1200px)'
    });
    expect(column).toHaveStyleRule('max-width', 'calc(100% * (2 / 12))', {
        media: 'screen and (min-width: 1440px)'
    });
});
