import * as React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '../../modules/components/Button';
import Typography from '../../modules/components/Typography';
import { useHistory } from 'react-router-dom';
import editing  from "../../assets/Editing.svg";
import fileSubmission from "../../assets/files_submission.svg";
import design from "../../assets/design.svg";
import marketing from "../../assets/marketing.svg";
import printing from "../../assets/printing.svg";
import processing from "../../assets/processing.svg"


const styles = (theme) => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.secondary.light,
    overflow: 'hidden',
    userSelect: "none",
    paddingRight:"10%",
    paddingLeft:"10%"
  },
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(15),
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  mainContainer: {
    marginBottom :theme.spacing(5),
    boxShadow: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
    borderRadius: "5px"
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    marginBottom: theme.spacing(5),
  },
  title2:{
    marginBottom: theme.spacing(14),
  },
  number: {
    fontSize: 24,
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.secondary.main,
    fontWeight: theme.typography.fontWeightMedium,
  },
  image: {
    height:120,
    width:120,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
    opacity: 0.7,
  },
  button: {
    marginTop: theme.spacing(8),
  },
  margin :{
   paddingBottom: "5%",
   color: theme.palette.secondary.main,
  },
  color: {
    color: "#6f6f6f"
  }
});

function ProductHowItWorks(props) {
  const { classes } = props;
  const history = useHistory();
  const handleClick = (route) =>{
    history.push(route)
  }
  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <Typography
          variant="h4"
          marked="center"
          className={classes.title}
          component="h2"
        >
          Publication Process
        </Typography>
        <Typography
          variant="h5"
          marked="center"
          className={classes.title2}
        >
          Publication steps in process
        </Typography>
        <div>
          <Grid container spacing={5}  justify="space-between" alignItems="center">
            <Grid item xs={12} md={3} className={classes.mainContainer}>
              <div className={classes.item}>
                <div className={classes.number}>1.</div>
                <img
                  src={fileSubmission}
                  alt="suitcase"
                  className={classes.image}
                />
                <Typography variant="h5" align="center"  className={classes.margin}>
                  File Submision
                </Typography>
                <Typography variant="body2" align="center" className={classes.color}>
Author Submit Book File In MS Word Format Through E-Mail At: publications@Gmail.Com.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={3} className={classes.mainContainer}>
              <div className={classes.item}>
                <div className={classes.number}>2.</div>
                <img
                  src={ processing }
                  alt="graph"
                  className={classes.image}
                />
                <Typography variant="h5" align="center" className={classes.margin}> 
                  Processing
                </Typography>
                <Typography variant="body2" align="center" className={classes.color}>
                  Our Teem Will Sign Agreement With Author And Will Start Publications Process As Per Plan Chosen.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={3} className={classes.mainContainer}>
              <div className={classes.item}>
                <div className={classes.number}>3.</div>
                <img
                  src={editing}
                  alt="clock"
                  className={classes.image}
                />
                <Typography variant="h5" align="center" className={classes.margin}>
                  Editing & Formatting
                </Typography>
                <Typography variant="body2" align="center" className={classes.color}>
                  Our Team Will Start Editing And Formatting Of Your Book.
                </Typography>
              </div>
            </Grid>
            </Grid>
            <Grid container spacing={5}  justify="space-between" alignItems="center">
            <Grid item xs={12} md={3} className={classes.mainContainer}>
              <div className={classes.item}>
                <div className={classes.number}>4.</div>
                <img
                  src={design}
                  alt="suitcase"
                  className={classes.image}
                />
                <Typography variant="h5" align="center" className={classes.margin}>
                 Design and Proof Reading
                </Typography>
                <Typography variant="body2" align="center" className={classes.color}>
                  After Editing And Formatting Work, Cover Page Designing Will Be Done And Product Is Sent For Proof Reading To Author
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={3} className={classes.mainContainer}>
              <div className={classes.item}>
                <div className={classes.number}>5.</div>
                <img
                  src={printing}
                  alt="suitcase"
                  className={classes.image}
                />
                <Typography variant="h5" align="center" className={classes.margin}>
                  Book Creation/Printing
                </Typography>
                <Typography variant="body2" align="center" className={classes.color}>
                  After Proof Reading , Printing Of Book I Done And E-Book Is Created With IS
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={3} className={classes.mainContainer}>
              <div className={classes.item}>
                <div className={classes.number}>6.</div>
                <img
                  src={marketing}
                  alt="suitcase"
                  className={classes.image}
                />
                <Typography variant="h5" align="center" className={classes.margin}>
                  Dispatch and Marketing
                </Typography>
                <Typography variant="body2" align="center" className={classes.color}>
                  As Per Agreement, Printed Copies Are Delivered To Author Through Courier/Post. Book Is Listed On Amazon And Other Platforms For Sale
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
        <Button
          color="secondary"
          size="large"
          variant="contained"
          className={classes.button}
          component="a"
          onClick={() => handleClick("/signup")}
        >
          Get started
        </Button>
      </Container>
    </section>
  );
}

ProductHowItWorks.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHowItWorks);
