import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  main:{
    width:"100%%",
    padding:"5%",
    margin:"0 auto",
    display:"flex",
    flexDirection:"row",
    flexWrap:"wrap",
    alignItems: "flex-start",
    justifyContent:"flex-start"
  },
  root: {
    maxWidth: 200,
    transition: "transform .6s",
    "&:hover": {
        transform: "scale(1.05)"
      }
  },
  card : {
    padding:"1.5%",
  }
});


const books = [
  {
    image:"http://www.bspublications.com/images/1598513713-advances-in-academic-research-and-development.jpg",
    title:"title1",
    price:"₹ 800.00"
  },
  {
    image:"http://www.bspublications.com/images/1598513713-advances-in-academic-research-and-development.jpg",
    title:"title2",
    price:"₹ 800.00"
  },
  {
    image:"http://www.bspublications.com/images/1598513713-advances-in-academic-research-and-development.jpg",
    title:"title3",
    price:"₹ 800.00"
  },
  {
    image:"http://www.bspublications.com/images/1598513713-advances-in-academic-research-and-development.jpg",
    title:"title4",
    price:"₹ 800.00"
  },
  {
    image:"http://www.bspublications.com/images/1598513713-advances-in-academic-research-and-development.jpg",
    title:"title5",
    price:"₹ 800.00"
  },
  {
    image:"http://www.bspublications.com/images/1598513713-advances-in-academic-research-and-development.jpg",
    title:"title6",
    price:"₹ 800.00"
  },
  {
    image:"http://www.bspublications.com/images/1598513713-advances-in-academic-research-and-development.jpg",
    title:"title7",
    price:"₹ 800.00"
  },
  {
    image:"http://www.bspublications.com/images/1598513713-advances-in-academic-research-and-development.jpg",
    title:"title8",
    price:"₹ 800.00"
  },
];

export default function Cards() {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      {
        books.map((val, index)=>{
            return(
            <div key={index} className={classes.card}>
            <Link to={{pathname:`/books/${val.title}`, state: {id:val.title}}}>
            <Card className={classes.root} >
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="300"
                image={val.image}
                title={val.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {val.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {val.price}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          </Link>
            </div>
            )
        })
      }
    </div>
    
  );
}