import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
    components: {
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true,
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    minWidth: 0,
                    lineHeight: 1,
                    textTransform: 'none',
                }
            },
            variants: [
                {
                    props: { variant: 'grey' },
                    style: {
                        border: '1px solid',
                        borderColor: '#D0D5DD',
                        color: '#344054',
                        backgroundColor: '#FCFCFD',
                        '&:hover': {
                            backgroundColor: '#F2F4F7'
                        },
                    }
                }
            ],
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: { minHeight: 0 }
            },
        },
        MuiTabs: {
            styleOverrides: {
                indicator: {
                    display: 'flex',
                    justifyContent: 'center',
                    backgroundColor: 'white',
                    width: '100%',
                },
            },
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    display: 'flex',
                    justifyContent: 'center',
                    textTransform: 'none'
                }
            }
        },
    },
    palette: {
        primary: {
            main: '#444CE7',
            light: '#D1E0FF',
            dark: '#00359E'
        },
        secondary: {
            main: '#000'
        },
        error: {
            main: '#C53133'
        },
        neutral: {
            main: '#98A2B3',
            contrastText: '#000',
        },
        logoBlue: {
            main: '#374B5C',
            contrastText: '#fff',
        },
    }
});

export default theme;

/* 

GREYS
 
25: #FCFCFD
50: #F9FAFB
100: #F2F4F7
150: #EBEEF2
200: #E4E7EC
300: #D0D5DD
400: #98A2B3
500: #667085
600: #475467
700: #344054
800: #1D2939
900: #101828

BLUES

light: ##93C7F5
dark: #6589A8
darker: #283642
logo: #374B5C

ORANGES



*/