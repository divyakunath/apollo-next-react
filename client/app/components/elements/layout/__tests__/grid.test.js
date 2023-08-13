import React from 'react';
import renderer from 'react-test-renderer'
import { Grid } from '../index';
import theme from '../../../../theme';

test('styles of grid component', () => {
    const column = renderer.create(
        <Grid theme={theme} />
    ).toJSON();
    expect(column).toHaveStyleRule('width', '100%');
    expect(column).toHaveStyleRule('padding-left', '1.5rem');
    expect(column).toHaveStyleRule('padding-right', '1.5rem');
    expect(column).toHaveStyleRule('max-width', '600px');
    expect(column).toHaveStyleRule('max-width', '760px', {
        media: 'screen and (min-width: 800px)'
    });
    expect(column).toHaveStyleRule('max-width', '900px', {
        media: 'screen and (min-width: 1000px)'
    });
    expect(column).toHaveStyleRule('max-width', '1100px', {
        media: 'screen and (min-width: 1200px)'
    });
    expect(column).toHaveStyleRule('max-width', '1200px', {
        media: 'screen and (min-width: 1440px)'
    });
});
