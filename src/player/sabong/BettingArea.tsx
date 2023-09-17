import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { Grid, TextField } from '@mui/material';
import BettingCard from './BettingCard';
import axios from 'axios';

export interface MediaProps {
    betType: string;
    walaTotalBet: number;
    meronTotalBet: number;
    walaPayout: number;
    meronPayout: number;
    betAmount: number;
}

export default function BettingArea(props: MediaProps) {

    const [walaAmount, setWalaAmount] = useState(0);
    const [meronAmount, setMeronAmount] = useState(0);
    const [amount, setAmount] = useState(0);
    const token = localStorage.getItem('token');

    // Set the Authorization header in the Axios request
    const headers = {
        Authorization: `Bearer ${token}`,
    };

    const handleClick = (newValue: number) => {
        setAmount(newValue);
        setMeronAmount(newValue);
        setWalaAmount(newValue);
        console.log(amount);
    };

    const updateAmount = (amount: number, type: number) => {
        console.log("PARENT!!!", amount, type);
        axios
            .post("http://localhost:8080/bet/placeBet", {
                playerId: 1,
                amount: amount,
                betOn: type == 1 ? "MERON" : "WALA",
                type: 1
            }, {headers})
            .then((res) => {
                console.log(res.data.result);

            });
        setAmount(amount);
    };

    return (
        <>
            <Grid container spacing={1}>
                <Grid item lg={6} md={6} xs={6}>
                    <BettingCard amount={meronAmount} onUpdateAmount={updateAmount} betType={'MERON'} totalBet={344} payout={3543} type={1} />
                </Grid>
                <Grid item lg={6} md={6} xs={6}>
                    <BettingCard amount={walaAmount} onUpdateAmount={updateAmount} betType={'WALA'} totalBet={6654} payout={54311} type={2} />
                </Grid>
                <Grid item lg={12} md={6} xs={12}>
                    <TextField
                        id="amount"
                        label="Amount"
                        type="number"
                        fullWidth
                        value={amount}
                        onChange={(event) => {
                            setAmount(parseInt(event.target.value));
                        }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>
                <Grid item lg={1} xs={2}>
                    <Button variant='contained' size="small" onClick={(event) => handleClick(50)}
                    >50</Button>
                </Grid>
                <Grid item lg={1} xs={2}>
                    <Button variant='contained' size="small" onClick={() => handleClick(100)}
                    >100</Button>
                </Grid>
                <Grid item lg={1} xs={2}>
                    <Button variant='contained' size="small" onClick={() => handleClick(500)}
                    >500</Button>
                </Grid>
                <Grid item lg={1} xs={2}>
                    <Button variant='contained' size="small" onClick={() => handleClick(1000)}
                    >1,000</Button>
                </Grid>
                <Grid item lg={1} xs={2}>
                    <Button variant='contained' size="small" onClick={() => handleClick(2000)}
                    >2,000</Button>
                </Grid>
                <Grid item lg={1} xs={2}>
                    <Button variant='contained' size="small" onClick={() => handleClick(3000)}
                    >3,000</Button>
                </Grid>
                <Grid item lg={1} xs={2}>
                    <Button variant='contained' size="small" onClick={() => handleClick(4000)}
                    >4,000</Button>
                </Grid>
                <Grid item lg={1} xs={2}>
                    <Button variant='contained' size="small" onClick={() => handleClick(50000)}
                    >5,000</Button>
                </Grid>
                <Grid item lg={1} xs={2}>
                    <Button variant='contained' size="small" onClick={() => handleClick(7000)}
                    >7,000</Button>
                </Grid>
                <Grid item lg={1} xs={2}>
                    <Button variant='contained' size="small" onClick={() => handleClick(8000)}
                    >8,000</Button>
                </Grid>
                <Grid item lg={1} xs={2}>
                    <Button variant='contained' size="small" onClick={() => handleClick(10000)}
                    >10,000</Button>
                </Grid>
                <Grid item lg={1} xs={2}>
                    <Button variant='contained' size="small" onClick={() => handleClick(20000)}
                    >20,000</Button>
                </Grid>
            </Grid>
        </>

    );
}