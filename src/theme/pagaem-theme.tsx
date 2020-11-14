import { createMuiTheme } from "@material-ui/core/styles";

// Create a theme instance.
const pagaemTheme = createMuiTheme({
    palette: {
        primary: {
            light: '#778173',
            main: '#4B5548',
            dark: '#232c21',
            contrastText: '#fff',
        },
        secondary: {
            light: '#7889ee',
            main: '#425cbb',
            dark: '#00338a',
            contrastText: '#000',
        },
        error: {
            light: '#fff9f9',
            main: '#ff604f',
            dark: '#c52a25'
        },
        background: {
            default: "#E5E5E5;"
        },
        text: {
            secondary: '#666666'
        }
    },
    typography: {
        fontFamily: 'SpaceGrotesk',
        body1: {
            fontFamily: 'SpaceGrotesk',
            fontSize: '14px'
        },
        body2: {
            fontFamily: 'SpaceGrotesk',
            fontSize: '14px'
        },
    },
    shape: {
        borderRadius: 0,
    },
    spacing: 8,
    props: {
        MuiButton: {
            disableRipple: false,
            disableElevation: true,
            variant: 'contained',
            color: 'primary',
        },
        MuiCheckbox: {
            disableRipple: true
        },
        MuiTextField: {
            variant: 'filled',
            InputLabelProps: {
                shrink: true
            }
        },
        MuiPaper: {
            elevation: 0,
        },
        MuiCard: {
            elevation: 0
        }
    }
});

pagaemTheme.overrides = {
    MuiFilledInput: {
        root: {
            // backgroundColor: "green"
        }
    },
    MuiInputLabel: {
        root: {
            textTransform: 'none',
            fontSize: '20px',
        },
    },
    MuiInputBase: {
    },
    MuiInput: {
        root: {
            // top: zeavakTheme.spacing(2),
            border: `none`,
            outline: `none`,
            // padding: zeavakTheme.spacing(1),
            // '&$focused': {
            //     border: `1px solid ${zeavakTheme.palette.primary.main}`,
            //     outline: `1px solid ${zeavakTheme.palette.primary.main}`,
            // },
        },
    },
    MuiTooltip: {
        tooltip: {
            backgroundColor: '#fff',
            border: `2px solid ${pagaemTheme.palette.primary.main}`,
            color: pagaemTheme.palette.primary.main,
        },
        arrow: {
            color: pagaemTheme.palette.primary.main,
        },
    },
    MuiTextField: {
        root: {}
    },
    MuiButton: {
        root: {
            textTransform: 'none',
            padding: '10px 20px',
            outline: 'none !important'
        },
        fullWidth: {
            maxWidth: '300px'
        }
    },
    MuiPaper: {
        rounded: {
            borderRadius: 5
        }
    },
    MuiCard: {
        root: {
            borderRadius: 5,
        }
    },
    MuiCardHeader: {
        root: {
            padding: 20,
            borderBottom: '1px solid rgba(35, 35, 35, 0.1)'
        },
        title: {
            fontWeight: pagaemTheme.typography.fontWeightBold
        }
    },
    MuiCardContent: {
        root: {
            padding: 20
        }
    },
    MuiFormControlLabel: {
        label: {
            color: '#666666'
        }
    },
    MuiBackdrop: {
        root: {
            backgroundColor: 'rgba(0, 0, 0, 0.65)'
        }
    }
    // MuiLink: {

    // }
}

export default pagaemTheme;