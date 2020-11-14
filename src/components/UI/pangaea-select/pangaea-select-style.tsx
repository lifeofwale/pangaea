import { fade, makeStyles } from '@material-ui/core';


const PangaeaCustomSelect = makeStyles((theme) => ({
    select: {
        minWidth: 200,
        background: '#fcfcfa',
        // borderRadius: theme.shape.borderRadius,
        // color: `${theme.palette.primary.main}`,
        fontWeight: 200,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'rgba(0,0,0, 0.1)',
        paddingLeft: 24,
        paddingTop: 16.69,
        paddingBottom: 16.69,
        // boxShadow: '0px 5px 8px -3px rgba(0,0,0,0.14)',
        "&:focus": {
            boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
            borderColor: 'rgba(0,0,0, 0.1)',
        },
        "&.Mui-error": {
            boxShadow: `${fade(theme.palette.error.main, 0.25)} 0 0 0 0.2rem`,
            borderColor: theme.palette.error.main,
            backgroundColor: theme.palette.error.light,
        }
    },
    icon: {
        color: `#48D38A !important`,
        borderRadius: '50%',
        backgroundColor: 'rgba(170, 220, 173, 0.15);',
        right: 25,
        transition: theme.transitions.create(["transform"], {
            duration: theme.transitions.duration.short
        }),
        position: 'absolute',
        userSelect: 'none',
        pointerEvents: 'none',
    },
    paper: {
        borderRadius: 10,
    },
    list: {
        paddingTop: 0,
        paddingBottom: 0,
        background: '#ffffff',
        "& li": {
            fontWeight: theme.typography.fontWeightLight,
            paddingTop: 10,
            paddingBottom: 10,
        },
        "& li:hover": {
            background: `rgba(0, 0, 0, 0.04)`
            // background: `${theme.palette.primary.light}`
        },
        "& li.Mui-selected": {
            // color: 'white',
            background: `rgba(0, 0, 0, 0.08)`
            // background: `${theme.palette.primary.main}`
        },
        "& li.Mui-selected:hover": {
            background: `rgba(0, 0, 0, 0.04)`
            // background: `${theme.palette.primary.main}`
        }
    }
}));

export default PangaeaCustomSelect;