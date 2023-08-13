const properties = [
    ['m', 'margin'],
    ['p', 'padding'],
];
const directions: Array<[String, Array<String>]>= [
    ['l', ['left']],
    ['r', ['right']],
    ['t', ['top']],
    ['b', ['bottom']],
    ['x', ['left', 'right']],
    ['y', ['top', 'bottom']],
];

const defaultSpacing = 2;
const spacers = [
    [0, 0],
    [1, defaultSpacing / 4],
    [2, defaultSpacing / 2],
    [3, defaultSpacing],
    [4, defaultSpacing * 1.5],
    [5, defaultSpacing * 3],
];

const generateProperty = (
    property: String, sides: Array<String>, value: String
) => sides.map((side) => `
    ${property}-${side}: ${value};
`).join('');

const generateClasses = (
    [propertyKey, property]: Array<String>, [sideKey, sides]: [String, Array<String>]
) => spacers
    .map(([spacer, value]) => `
        .${propertyKey}${sideKey}-${spacer} {
            ${generateProperty(property, sides, `${value}rem`)}
        }
        ${propertyKey === 'm' && `
            .${propertyKey}${sideKey}-auto {
                ${generateProperty(property, sides, 'auto')}
            }
        `}
    `).join('');

const spacingClasses = `
    ${properties.map(
        (property) => directions.map(
            (direction) => generateClasses(property, direction)
        ).join('')
    )}
`;

export default spacingClasses;