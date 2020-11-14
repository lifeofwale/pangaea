import React from 'react';
import { AppBar, Avatar, Badge, Box, Button, ClickAwayListener, Grow, IconButton, ListItemIcon, ListItemText, Menu, MenuItem, MenuList, Paper, Popper, RootRef, Toolbar, Typography } from '@material-ui/core';
import AppBarStyle from './appbar-style';
import { Column, Row, Item } from '@mui-treasury/components/flex';
import { useDynamicAvatarStyles } from '@mui-treasury/styles/avatar/dynamic';
import { ShoppingCart } from 'react-feather';

const TopBar = (props: any) => {
    const { clicked } = props;

    const classes = AppBarStyle();
    const avatarStyles = useDynamicAvatarStyles({ size: 30 });

    return (
        <Box className={classes.root}>
            <AppBar position="fixed" color="inherit" elevation={0} className={classes.appBar} >
                <Toolbar disableGutters classes={{ root: classes.toolbarRoot }}>
                    <Row gap={2}>
                        <Item mr={6}>
                            <Typography style={{ marginRight: 20 }}>LUMIN</Typography>
                        </Item>
                        <Item>
                            <Typography>Shop</Typography>
                        </Item>
                        <Item>
                            <Typography>Learn</Typography>
                        </Item>
                    </Row>
                    <Row gap={2} alignItems="center">
                        <Item>
                            <Typography>Accounts</Typography>
                        </Item>
                        <Item>
                            <ShoppingCart style={{ cursor: 'pointer '}} size={18} onClick={clicked(true)} />
                        </Item>
                    </Row>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default TopBar;