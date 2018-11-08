import {
    blueGrey,
    red,
    indigo,
    teal,
    yellow,
    brown,
    pink,
    blue,
    green,
    amber,
    grey,
    purple,
    lightBlue,
    lightGreen,
    orange,
    deepPurple,
    lime,
    deepOrange,
    cyan,
} from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

export const COLOR_PALETTES = {
    manty: {
        name: 'manty',
        colors: [
            teal[400],
            yellow[400],
            pink[400],
            blue[400],
            green[400],
            amber[400],
        ],
    },
    office: {
        name: 'office',
        colors: [
            '#5182BB',
            '#BE5150',
            '#9CB95F',
            '#8066A0',
            '#50ACC4',
            '#F5964F',
        ],
    },
    blues: {
        name: 'blues',
        colors: [
            '#eff3ff',
            '#c6dbef',
            '#9ecae1',
            '#6baed6',
            '#3182bd',
            '#08519c',
        ].reverse(),
    },
    oranges: {
        name: 'oranges',
        colors: [
            '#feedde',
            '#fdd0a2',
            '#fdae6b',
            '#fd8d3c',
            '#e6550d',
            '#a63603',
        ].reverse(),
    },
    greens: {
        name: 'greens',
        colors: [
            '#edf8e9',
            '#c7e9c0',
            '#a1d99b',
            '#74c476',
            '#31a354',
            '#006d2c',
        ].reverse(),
    },
    kandinsky: {
        name: 'kandinsky',
        colors: [
            '#d2981a',
            '#a53e1f',
            '#457277',
            '#8dcee2',
            '#8f657d',
            '#47880A',
        ],
    },
};
export function getColorPalette(paletteKey) {
    if (!Object.keys(COLOR_PALETTES).includes(paletteKey)) {
        return COLOR_PALETTES.manty;
    }
    return COLOR_PALETTES[paletteKey];
}
export const COLOR_SCHEME = [
    red[400],
    indigo[400],
    teal[400],
    yellow[400],
    pink[400],
    blue[400],
    green[400],
    amber[400],
    brown[400],
    purple[400],
    lightBlue[400],
    lightGreen[400],
    orange[400],
    blueGrey[400],
    deepPurple[400],
    cyan[400],
    lime[400],
    deepOrange[400],
    grey[400],
];

export const PRIMARY_COLOR = '#003cac';
export const SECONDARY_COLOR = '#4cb5fc';
export const TERTIARY_COLOR = '#4f4f4e';

const theme = {
    palette: {
        type: 'light',
        primary: {
            50: '#e0e8f5',
            100: '#b3c5e6',
            200: '#809ed6',
            300: '#4d77c5',
            400: '#2659b8',
            500: '#003cac',
            600: '#0036a5',
            700: '#002e9b',
            800: '#002792',
            900: '#001a82',
            A100: '#afb9ff',
            A200: '#7c8cff',
            A400: '#495fff',
            A700: '#3049ff',
            contrastDefaultColor: 'light',
            contrastDarkColors: ['50', '100', '200', 'A100', 'A200'],
            contrastLightColors: [
                '300',
                '400',
                '500',
                '600',
                '700',
                '800',
                '900',
                'A400',
                'A700',
            ],
        },
        secondary: {
            50: '#eaf6ff',
            100: '#c9e9fe',
            200: '#a6dafe',
            300: '#82cbfd',
            400: '#67c0fc',
            500: '#4cb5fc',
            600: '#45aefc',
            700: '#3ca5fb',
            800: '#339dfb',
            900: '#248dfa',
            A100: '#ffffff',
            A200: '#ffffff',
            A400: '#4cb5fc',
            A700: '#b3d7ff',
            contrastDefaultColor: 'dark',
            contrastDarkColors: [
                '50',
                '100',
                '200',
                '300',
                '400',
                '500',
                '600',
                '700',
                '800',
                'A100',
                'A200',
                'A400',
                'A700',
            ],
            contrastLightColors: ['900'],
        },
    },
};

// This replaces the textColor value on the palette
// and then update the keys for each component that depends on it.
// More on Colors: http://www.material-ui.com/#/customization/colors
export const muiTheme = createMuiTheme(theme);



// WEBPACK FOOTER //
// ./src/styles/theme.js