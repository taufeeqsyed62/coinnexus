import React from 'react';
import { CryptoState } from '../CryptoContext';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography } from '@material-ui/core';
import { numberWithCommas } from './CoinsTable';

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: '#16171a',
    margin: theme.spacing(2),
    borderRadius: 8,
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    [theme.breakpoints.down('xs')]: {
      margin: theme.spacing(1),
    },
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(1.5),
    },
  },
  newLabel: {
    color: '#EEBC1D',
    fontFamily: 'Montserrat',
    fontWeight: 700,
    fontSize: '0.9rem',
    marginBottom: theme.spacing(1),
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.8rem',
    },
  },
  title: {
    color: '#fff',
    fontFamily: 'Montserrat',
    fontWeight: 700,
    fontSize: '1.2rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1rem',
    },
  },
  price: {
    color: '#fff',
    fontFamily: 'Montserrat',
    fontSize: '1.1rem',
    margin: theme.spacing(0.5, 0),
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.95rem',
    },
  },
  change: {
    fontFamily: 'Montserrat',
    fontWeight: 500,
    fontSize: '1rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.9rem',
    },
  },
  marketCap: {
    color: 'darkgrey',
    fontFamily: 'Montserrat',
    fontSize: '1rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.9rem',
    },
  },
}));

const StockInfoBox = ({ coins }) => {
  const { symbol } = CryptoState();
  const classes = useStyles();

  // Select the first coin or sort by last_updated for the newest
  const newCoin = coins && coins.length > 0 ? coins[0] : null;
  // For newest by last_updated, uncomment:
  /*
  const newCoin = coins && coins.length > 0
    ? coins.sort((a, b) => new Date(b.last_updated) - new Date(a.last_updated))[0]
    : null;
  */

  if (!newCoin) {
    return (
      <Card className={classes.card}>
     
      </Card>
    );
  }

  const profit = newCoin.price_change_percentage_24h > 0;

  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Typography className={classes.newLabel}>
          New Coin Added
        </Typography>
        <Typography className={classes.title}>
          {newCoin.name} ({newCoin.symbol.toUpperCase()})
        </Typography>
        <Typography className={classes.price}>
          {symbol}{numberWithCommas(newCoin.current_price.toFixed(2))}
        </Typography>
        <Typography
          className={classes.change}
          style={{ color: profit ? 'rgb(14, 203, 129)' : 'red' }}
        >
          {profit && '+'}{newCoin.price_change_percentage_24h.toFixed(2)}%
        </Typography>
        <Typography className={classes.marketCap}>
          Market Cap: {symbol}{numberWithCommas(newCoin.market_cap.toString().slice(0, -6))}M
        </Typography>
      </CardContent>
    </Card>
  );
};

export default StockInfoBox;