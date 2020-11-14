import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Column, Item, Row } from '@mui-treasury/components/flex';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LeftDrawerStyle from './left-drawer-style'
import { Avatar, Box, Paper, Typography } from '@material-ui/core';
import PangaeaSelect from '../pangaea-select/pangaea-select';
import { X } from 'react-feather';
import { useDynamicAvatarStyles } from '@mui-treasury/styles/avatar/dynamic';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { Currency } from '../../../model/api-model';


const TemporaryDrawer = React.forwardRef<HTMLDivElement, any>((props: any, ref) => {
    const { clicked, drawerState, cartStorage, addItem, removeCart, totalCart } = props;
    const classes = LeftDrawerStyle();
    const avatarStyles = useDynamicAvatarStyles({ size: 30 });

    const handleIncreaseCart = (evt: any) => {
        evt.preventDefault();
    }

    const list = (
        <div
            className={classes.list}
            role="presentation"
            onClick={clicked(true)}
            onKeyDown={clicked(true)}
        >
            <Column gap={1.2}>
                <Item>
                    <Row alignItems="center" width={'100%'}>
                        <Item width={'50%'}>
                            <ExpandMoreIcon className={classes.icon} onClick={clicked(true)} />
                        </Item>
                        <Item width={'50%'}>
                            <Typography variant="subtitle2" style={{ fontSize: 10 }} color="textSecondary" align="center">YOUR CART</Typography>
                        </Item>
                    </Row>
                </Item>
                <Item mt={'-12px'}>
                    <select name="currency" style={{ border: 0, padding: 4 }}>
                        <option>USD</option>
                        <option>NGN</option>
                    </select>
                </Item>
                {
                    cartStorage.map((res: any, index: any) => (
                        <Item mb={1} key={index}>
                            <Paper className={classes.paperRoot}>
                                <X className="icon-x" size={10} />
                                <Column gap={1} px={1.5}>
                                    <Item>
                                        <Typography variant="body2"> { res.product.title } </Typography>
                                    </Item>
                                    <Item alignSelf="flex-end" pr={4}>
                                        <Avatar classes={avatarStyles} />
                                    </Item>
                                    <Item>
                                        <Row alignItems="center" width="100%">
                                            <Item width="50%">
                                                <Row gap={0} alignItems="center">
                                                    <Item>
                                                        <button className={classes.firstNormalBtn} onClick={() => removeCart(res.id)}>-</button>
                                                    </Item>
                                                    <Item>
                                                        <span className={classes.spanBox}>{ res.qty }</span>
                                                    </Item>
                                                    <Item>
                                                        <button className={classes.secNormalBtn} onClick={() => addItem(res)}>+</button>
                                                    </Item>
                                                </Row>
                                            </Item>
                                            <Item width="50%"> $ { res.product.price } </Item>
                                        </Row>
                                    </Item>
                                </Column>
                            </Paper>
                        </Item>
                    ))
                }
            </Column>
            <Box position="absolute" bottom={50} width="100%">
                <Column gap={1}>
                    <Item>
                        <Divider variant="fullWidth" />
                    </Item>
                    <Item>
                        <Row justifyContent="space-between">
                            <Item>
                                <Typography>Subtotal</Typography>
                            </Item>
                            <Item><Typography>$ {totalCart}</Typography>
                            </Item>
                        </Row>
                    </Item>
                    <Item>
                        <Paper style={{ backgroundColor: '#ffffff', border: '1px solid rgb(0,0,0, 0.5)', padding: 4, borderRadius: 0 }}>
                            <Typography align="center" color="textSecondary">MAKE THIS A SUBSCRIPTION PAY (20%)</Typography>
                        </Paper>
                    </Item>
                    <Item width="100%">
                        <Button fullWidth={true} style={{ maxWidth: 334 }}>PROCEED TO CHECKOUT</Button>
                    </Item>
                </Column>

            </Box>
        </div>
    );

    return (
        <div ref={ref}>
            <React.Fragment>
                <Drawer anchor="right" classes={{ paper: classes.drawerPaper }} open={drawerState} onClose={clicked(false)}>
                    {list}
                </Drawer>
            </React.Fragment>
        </div>
    );
});

export default TemporaryDrawer;
