import { Theme } from 'theme-ui';

export const theme = {
    fonts: {
        body: 'Urbanist, sans-serif',
        heading: 'Prata',
    },
    fontSizes: {
        pre: '0.75rem',
        p: '14px',
        h1: '3.052rem',
        h2: '2.441rem',
        h3: '1.953rem',
        h4: '1.563rem'
    },
    fontWeights: {
        light: 200,
        normal: 400,
        bold: 800,
    },
    colors: {
        text: '#434343',
        background_dark: '#FFF7E8',
        background_light: '#FFFDFA',
        primary_dark: '#EEAC66', 
        primary_light: '#EFB77B',
        dark_grey: '#707070',
        light_grey: '#E7E7E7',
        primary_blue: '#A7E1F7',
        secondary_blue: '#B2E4F9',
        danger: '#CD2D2D',
        success: '#1E8433'
    },
    styles: {
        spinner: {
            color: '#EEAC66'
        }
    },
    buttons: {
        primary: {
            fontFamily: 'body',
            fontWeight: 'normal',
            color: 'text',
            alignItems: 'center',
            borderRadius: '8px',
            cursor: 'pointer',
            bg: 'primary_dark',
            transition: 'all 250ms ease-in-out',
            '&:hover': {
                bg: 'primary_light'
            }
        },
        secondary: {
            fontFamily: 'body',
            fontWeight: 'normal',
            color: 'background_light',
            borderRadius: '8px',
            alignItems: 'center',
            cursor: 'pointer',
            transition: 'all 250ms ease-in-out',
            bg: 'dark_grey',
            '&:hover': {
                bg: 'primary_dark',

            }
        }
    }
}