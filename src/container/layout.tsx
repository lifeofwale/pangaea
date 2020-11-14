import React, { useEffect, useState } from 'react'
import TopBar from '../components/app-bar/top-bar';
import { AppBar, Avatar, Badge, Box, Button, ClickAwayListener, FormControl, Grid, Grow, IconButton, ListItemIcon, ListItemText, Menu, MenuItem, MenuList, Paper, Popper, RootRef, Toolbar, Typography } from '@material-ui/core';
import LayoutStyle from './layout-style';
import { Column, Row, Item } from '@mui-treasury/components/flex';
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ErrorMessage } from '@hookform/error-message';
import PangaeaSelect from '../components/UI/pangaea-select/pangaea-select'
import { useDynamicAvatarStyles } from '@mui-treasury/styles/avatar/dynamic';
import TemporaryDrawer from '../components/UI/left-drawer/left-drawer'
import { useQuery, gql } from '@apollo/client';
import Skeleton from '@material-ui/lab/Skeleton';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const GET_PRODUCTS = gql`
{
  products {
      id
      title
      image_url
      price(currency: USD)
    }
}
`;

const filterSchema = yup.object().shape({
    filter: yup.string(),
});

const Layout = (props: any) => {
    const classes = LayoutStyle();
    const avatarStyles = useDynamicAvatarStyles({ size: 180 });
    const { loading, error, data } = useQuery(GET_PRODUCTS);
    const matches = useMediaQuery('(min-width:768px)');

    const [cartStorage, setCartStorage] = useState<Array<any>>([]);
    const [totalCart, setTotalCart] = useState<any>(0);

    const [drawerState, setDrawerState] = React.useState(false);

    const { control, register, handleSubmit, setError, clearErrors, setValue, errors, watch, getValues, formState } = useForm({
        resolver: yupResolver(filterSchema)
    });

    const getFiltered = watch('filter');

    useEffect(() => {
        let sum = 0;
        cartStorage.forEach(element => {
            sum = sum + element.amount 
        });
        console.log(sum);
        setTotalCart(sum);
    }, [cartStorage]);

    const toggleDrawer = (actionType: boolean) => (event: any) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerState(actionType);
    };


    const handleOnChange = (evt: any) => {

    }

    const addItem = (prod: any) => {
        setDrawerState(true);
        console.log(prod)
        console.log(cartStorage)
        // get array of cartItems from local storage
        if (cartStorage.length === 0) {
            setCartStorage([{
                'id': prod.id,
                'product': prod,
                'qty': 1,
                'amount': parseFloat(prod.price) * 1
            }]);
        } else {
            let added = 0;
            // tslint:disable-next-line: prefer-for-of
            const immutableStorage = cartStorage.slice();
            for (let i = 0; i < immutableStorage.length; i++) {

                if (prod.id === immutableStorage[i].product.id) {

                    const qty = immutableStorage[i].qty;
                    // data[i].qty = qty + 1;
                    immutableStorage[i].qty = qty + 1;

                    immutableStorage[i].amount = parseFloat(immutableStorage[i].amount) + (parseFloat(immutableStorage[i].product.price) * 1);
                    console.log(immutableStorage[i].qty);
                    added = 1;
                }
                setCartStorage(immutableStorage);
            }
            if (added === 0) {
                immutableStorage.push({
                    'id': prod.id,
                    'product': prod,
                    'qty': 1,
                    'amount': parseFloat(prod.price) * 1
                });
                setCartStorage(immutableStorage);
            }
        }
    }

    const deductItem = (prodId: any) => {
        // let price=cartitem.product.price;
        // let qty=cartitem.qty;
        console.log(prodId)
        const newArray: any = cartStorage.slice();
        console.log(newArray);
        for (let i in newArray) {
            if (newArray[i].id === prodId) {
                newArray[i].qty = newArray[i].qty - 1;
                newArray[i].amount = newArray[i].amount - newArray[i].product.price;
                if (newArray[i].qty === 0) {
                    delete newArray[i];
                }
               break; //Stop this loop, we found it!
            }
          }
        setCartStorage(newArray);
    }

    React.useEffect(() => {
        console.log(cartStorage)
    }, [cartStorage])
    return (
        <Box>
            <TopBar clicked={toggleDrawer} />
            <Toolbar />
            <Column>
                <Item>
                    <Paper className={classes.paperRoot} >
                        <Column gap={1}>
                            <Item>
                                <Typography variant="h4"> All Products </Typography>
                            </Item>
                            <Item>
                                <Typography> A 360 Look Lumen </Typography>
                            </Item>
                        </Column>
                        <Box>
                            <FormControl fullWidth={true}>
                                <Controller
                                    as={
                                        <PangaeaSelect
                                            displayEmpty
                                            disableUnderline
                                            error={errors.ageRange && true}
                                            onChange={handleOnChange}
                                            renderValue={
                                                getFiltered !== undefined ?
                                                    getFiltered?.toString() !== '' ? undefined : () => <Typography color="textSecondary"> Filter? </Typography> :
                                                    getFiltered === undefined ? () => <Typography> How old are you? </Typography> :
                                                        undefined
                                            }
                                        >
                                            <MenuItem value="20">20</MenuItem>
                                            <MenuItem value="30">30</MenuItem>
                                            <MenuItem value="40">40</MenuItem>

                                        </PangaeaSelect>
                                    }
                                    name="filter"
                                    control={control}
                                    defaultValue=""
                                />
                            </FormControl>

                        </Box>
                    </Paper>
                </Item>
                <Item>
                    <Paper className={classes.contentPage}>
                        <Box className="internal-page">
                            <Grid container direction="row" justify="space-around">
                                {
                                    !loading ?
                                        data?.products.map((prod: any, index: any) => (
                                            <Grid key={index} item xs={matches ? 4 : 6}>
                                                <Column alignItems="center" gap={1}>
                                                    <Item>
                                                        <Avatar classes={avatarStyles} variant="square" src={prod.image_url} />
                                                    </Item>
                                                    <Item>
                                                        <Typography color="textSecondary">{prod.title}</Typography>
                                                    </Item>
                                                    <Item>
                                                        <Typography>USD {prod.price}</Typography>
                                                    </Item>
                                                    <Item>
                                                        <Button onClick={() => addItem(prod)}>Add to Cart</Button>
                                                    </Item>
                                                </Column>
                                            </Grid>
                                        ))
                                        :
                                        Array.from(Array(10).keys()).map((prod: any, index: any) => (
                                            <Grid key={index} item xs={4}>
                                                <Column alignItems="center" gap={1}>
                                                    <Item>
                                                        <Skeleton variant="circle" width={180} height={180} />
                                                    </Item>
                                                    <Item>
                                                        <Skeleton variant="rect" width={200} />
                                                    </Item>
                                                    <Item>
                                                        <Skeleton variant="rect" width={100} />
                                                    </Item>
                                                    <Item>
                                                        <Skeleton variant="rect" width={150} />
                                                    </Item>
                                                </Column>
                                            </Grid>
                                        ))
                                }
                            </Grid>
                        </Box>
                    </Paper>
                </Item>
            </Column>
            <TemporaryDrawer clicked={toggleDrawer} totalCart={totalCart} cartStorage={cartStorage} removeCart={deductItem} addItem={addItem} drawerState={drawerState} />
        </Box>
    )
}

export default Layout;