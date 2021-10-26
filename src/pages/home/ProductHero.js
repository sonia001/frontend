import * as React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '../../modules/components/Button';
import Typography from '../../modules/components/Typography';
import ProductHeroLayout from './ProductHeroLayout';
import backgroundImage from "../../assets/heroreal.jpg"
import { useHistory } from 'react-router-dom';
  

const styles = (theme) => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    fontFamily: 'serif',
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

function ProductHero(props) {
  const { classes } = props;
  const history = useHistory();
  const handleClick = (route) =>{
    history.push(route)
  }

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Publish Your Dreams
      </Typography>
      <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
        YOU DON'T HAVE TO BE GREAT TO START, BUT YOU HAVE TO START TO BE GREAT. START WITH US!!
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
        component="a"
        onClick={() => handleClick("/signup")}
      >
        Register
      </Button>
      <Typography variant="body2" color="inherit" className={classes.more}>
        Discover the experience
      </Typography>
    </ProductHeroLayout>
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);
