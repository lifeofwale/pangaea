import { makeStyles } from "@material-ui/core";

const LayoutStyle = makeStyles(theme => ({
    paperRoot: {
        width: '100%',
        minHeight: '250px',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#fcfcfa',
        borderRadius: 'none',
        // paddingLeft: 40,
        // paddingRight: 40,
        justifyContent: 'space-around'
    },
    contentPage: {
        backgroundColor: '#E2E6E3',
        width: '100%',
        '& .internal-page': {
            padding: '4.2rem 10rem',
        }
    }
}));

export default LayoutStyle;