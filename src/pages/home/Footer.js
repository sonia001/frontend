import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Logo from '../../assets/Logo.png'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import AppleStore from "../../assets/apple-store.svg";
import GooglePlay from "../../assets/google-play-badge.png";
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
      flexgrow: 1,
      background: '#222222',
      padding: '50px',
      fontFamily: 'Quicksand',
      color: '#BBBBBB',
  },
  footerStyle:{
    display:'flex',
    justifyContent:'flex-start',
    listStyleType:'none',
    fontSize:'14px',
    margin:0,
  },
 footerContainer:{
    listStyleType:'none',
    paddingLeft:0,
    padding:'5px'
  },
  listMarginTop:{
    marginTop:'5px',
  },
  link: {
    color: '#BBBBBB',
    textDecoration: 'none',
    fontSize: '14px'
  },
  footer:{
      display: 'flex',
      flexDirection: 'column',
      justifyContent:'flex-start',
      padding: '10px',
      fontSize:'16px',
      alignItems:'center',
      opacity: 1,
      [theme.breakpoints.down('sm')]: {
        paddingLeft:0,
        },
  },
  contactUs:{
     display:'flex',
     justifyContent:'flex-start',
     fontSize: '14px',
     padding:'5px',
  },
  icon: {
    width:'12px',
    height:'12px',
    margin: 'auto 0',
  },
  footermedia:{
    listStyleType:'none',
    paddingLeft:0,
    padding:'5px',
  },
  footerLogo:{
    width: '170px',
    height: '55px',
  },
  footerAppStore:{
      display:'flex',
      flexDirection:'column',
      justifyContent:'flex-end',
      alignItems:'center',
      [theme.breakpoints.down('sm')]: {
       alignItems:'center',
        },
  },
  socialIcon:{
      marginRight:'5px',
      color: '#BBBBBB',
  },
  googlePlay:{
    height:'67px',
    width:'175px', 
  },
  appStore:{
    height:'67px',
    width:'175px', 
    padding:'11px',
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (

      <Grid container component="main" className={classes.root}>
       <Grid md={12} sm={12} xs={12}>
       <img src={Logo} className={classes.footerLogo}/>
       </Grid>
       <Grid md={4} sm={4} xs={12}  className={classes.footerStyle}>
       <ul className={classes.footerContainer}>
           <li ><NavLink to='/' className= {classes.link}>Home</NavLink></li>
           <li className={classes.listMarginTop}><NavLink to='/aboutus' className= {classes.link}>About Us </NavLink></li>
           <li className={classes.listMarginTop}><NavLink to='/book' className= {classes.link}>Books</NavLink></li>
           <li className={classes.listMarginTop}><NavLink to='/publishbook' className= {classes.link}>Publish Books</NavLink></li>
           <li className={classes.listMarginTop}><NavLink to='/publishbookchapter' className= {classes.link}>Publish Book Chapter</NavLink></li>
           <li className={classes.listMarginTop}><NavLink to='/home' className= {classes.link}>Contact Us</NavLink></li>
       </ul>
       </Grid>
       <Grid md={4} sm={4} xs={12} className={classes.footer}>
           <div>
           <text>Contact Info</text>
           <div className={classes.contactUs}>
             <HomeOutlinedIcon className={classes.icon}/>
             <text>604/605, Tower 1 Assotech Buisness Cresterra, Plot no 22, Sector 135, Noida 201301</text>
           </div>
           <div  className={classes.contactUs}>
               <PhoneOutlinedIcon className={classes.icon}/>
               <a href='tel:+919717222999' className= {classes.link}><text>+919717222999</text></a>
           </div>
           <div  className={classes.contactUs}>
               <MailOutlineOutlinedIcon className={classes.icon}/>
               <a href="mailto:Contact@meraakilearning.com" className= {classes.link}><text>Contact@publishing.com</text></a>
           </div>
           <ul className={classes.footermedia}>
           <li>
                  <NavLink to='' className={classes.socialIcon}><FacebookIcon fontSize='small'/></NavLink>
                  <NavLink to='' className={classes.socialIcon}><InstagramIcon fontSize='small'/></NavLink>
                  <NavLink to='' className={classes.socialIcon}><TwitterIcon fontSize='small'/></NavLink>
                  <NavLink to='' className={classes.socialIcon}><LinkedInIcon fontSize='small'/></NavLink>
              </li>
           </ul>
           </div>
       </Grid>
       <Grid md={4} sm={4} xs={12} className={classes.footerAppStore}>
           <NavLink to=''><img src={GooglePlay} className={classes.googlePlay} alt="google-play"/></NavLink>
           <NavLink to=''><img src={AppleStore} className={classes.appStore} alt="app-store"/></NavLink>
       </Grid>
    </Grid>
  )
}
