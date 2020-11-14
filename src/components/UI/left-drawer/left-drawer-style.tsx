import { makeStyles } from "@material-ui/core";

const drawerWidth = 350;

const LeftDrawerStyle = makeStyles(theme => ({
    list: {
        height: '100%',
        width: '100%',
        position: 'relative'
    },
    fullList: {
        width: 'auto',
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: '#F2F3F0',
        padding: 20
    },
    icon: {
        borderRadius: '50%',
        // backgroundColor: 'rgba(170, 220, 173, 0.15);',
        border: '1px solid rgba(0,0,0, 0.2)',
        fontSize: 14,
        color: 'rgba(0,0,0, 0.7)',
        transform: 'rotate(90deg)'
    },
    paperRoot: {
        position: 'relative',
        backgroundColor: '#ffffff',
        '& .icon-x': {
            position: 'absolute',
            top: 2,
            right: 5
        }
    },
    firstNormalBtn: {
        backgroundColor: '#ffffff',
        height: 24,
        boxSizing: 'border-box',
        borderRight: 0,
        borderTop: '1px solid rgba(0,0,0, 0.2)',
        borderLeft: '1px solid rgba(0,0,0, 0.2)',
        borderBottom: '1px solid rgba(0,0,0, 0.2)'
    },
    spanBox: {
        paddingBottom: 0.6,
        borderTop: '1px solid rgba(0,0,0, 0.2)',
        borderBottom: '1px solid rgba(0,0,0, 0.2)',
    },
    secNormalBtn: {
        backgroundColor: '#ffffff',
        height: 24,
        boxSizing: 'border-box',
        borderLeft: 0,
        borderTop: '1px solid rgba(0,0,0, 0.2)',
        borderRight: '1px solid rgba(0,0,0, 0.2)',
        borderBottom: '1px solid rgba(0,0,0, 0.2)'
    },
}));

export default LeftDrawerStyle;