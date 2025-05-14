import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography } from '@material-ui/core';
import img1 from "../assets/STOCKLINK.png";

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      margin: theme.spacing(1),
    },
  },
  card: {
    backgroundColor: '#16171a',
    width: '100%',
    borderRadius: 8,
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    border: '1px solid #16171a',
    animation: '$glowingEffect 1.5s infinite alternate',
  },
  '@keyframes glowingEffect': {
    '0%': {
      boxShadow: '0 0 5px rgba(238, 188, 29, 0.3), 0 0 10px rgba(238, 188, 29, 0.2)'
    },
    '100%': {
      boxShadow: '0 0 10px rgba(238, 188, 29, 0.5), 0 0 20px rgba(238, 188, 29, 0.3)'
    }
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(1.5),
    },
  },
  header: {
    textAlign: 'center',
    marginBottom: theme.spacing(1.5),
  },
  newLabel: {
    color: '#EEBC1D',
    fontFamily: 'Montserrat',
    fontWeight: 700,
    fontSize: '1rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.9rem',
    },
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    marginRight: theme.spacing(3),
    borderRadius: '50%',
    [theme.breakpoints.down('xs')]: {
      width: 50,
      height: 50,
      marginRight: theme.spacing(2),
    },
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    flex: 1,
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
    color: 'rgb(14, 203, 129)',
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
  footer: {
    textAlign: 'center',
    marginTop: theme.spacing(1),
    color: 'darkgrey',
    fontFamily: 'Montserrat',
    fontSize: '0.75rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.65rem',
    },
  },
}));

const StockInfoBox = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <div className={classes.header}>
            <Typography className={classes.newLabel}>
              New Coin Added
            </Typography>
          </div>
          <div className={classes.contentContainer}>
            <img
              src={img1}
              alt="STLK StockLink Logo"
              className={classes.image}
            />
            <div className={classes.textContainer}>
              <Typography className={classes.title}>
                STLK StockLink
              </Typography>
              <Typography className={classes.price}>
                $0.35
              </Typography>
              <Typography className={classes.change}>
                +7%
              </Typography>
              <Typography className={classes.marketCap}>
                Market Cap: $3.5M
              </Typography>
            </div>
          </div>
        </CardContent>
      </Card>
      <Typography className={classes.footer}>
        © {new Date().getFullYear()} StockLink. All Rights Reserved.
      </Typography>
    </div>
  );
};


export default StockInfoBox;