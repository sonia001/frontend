import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Grid, Button } from '@material-ui/core';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 350,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  buttonContainer:{
    display: 'flex',
    width: '70%',
    padding:'2%',
    justifyContent: 'space-evenly'
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Grid item sm={12} md={4}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
        >
          <Tab label="Work With Us" {...a11yProps(0)} />
          <Tab label="Publish Book Chapter" {...a11yProps(1)} />
          <Tab label="Publish Book" {...a11yProps(2)} />
          <Tab label="Conference Preceedings" {...a11yProps(3)} />
          <Tab label="Be A Book Editor" {...a11yProps(4)} />
          <Tab label="Become A Reviewer" {...a11yProps(5)} />
          <Tab label="Order Print Copies" {...a11yProps(6)} />
        </Tabs>
      </Grid>
      <Grid item sm={12} md={8}>
        <TabPanel value={value} index={0}>
        Bright Sky Publications provides Hassle free book chapter publishing and distribution services. It’s a professional publishing company, which helps author to publish their book chapters in a professional way and build their writing career with us.
        <ul>
          <li>Book will be publish with ISBN</li>
          <li>10-25 page allowed</li>
          <li>Peer Review process</li>
          <li>Publication certificate will be provide to each author</li>
          <li>Cost is Rs. 1,500 for Indian authors and US $ 50 for authors from rest of the world</li>
          <li>Email book chapter at brightskypublications@gmail.com</li>
        </ul>
        <div className= { classes.buttonContainer }>
          <Button variant="contained" color="secondary" className={classes.button}>Author Guidelines</Button>
          <Button variant="contained" color="secondary">Copyright form</Button>
        </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Bright Sky Publications provides Hassle free book chapter publishing and distribution services. It’s a professional publishing company, which helps author to publish their book chapters in a professional way and build their writing career with us.
          <ul>
            <li>Book will be publish with ISBN</li>
            <li>10-25 page allowed</li>
            <li>Peer Review process</li>
            <li>Publication certificate will be provide to each author</li>
            <li>Cost is Rs. 1,500 for Indian authors and US $ 50 for authors from rest of the world</li>
            <li>Email book chapter at brightskypublications@gmail.com</li>
          </ul>
          <div className= { classes.buttonContainer }>
            <Button variant="contained" color="secondary" className={classes.button}>Author Guidelines</Button>
            <Button variant="contained" color="secondary">Copyright form</Button>
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          Bright Sky Publications serves as an ideal platform for both the established as well as budding authors in getting their books published at an earlier date. We believe in providing high quality books at reasonable prices. We strongly believe in being in close contact with all our authors on the production, promotion and distribution of their books. Maintain high academic and production standards is our priority. Manuscripts received would be thoroughly assessed for their viability across the globe. Moreover, the ISBN is allotted to all our publications. Our books are at the forefront of knowledge and often break new ground in research. As an independent publisher, we are more willing to take risks by publishing in emerging disciplines.<br/><br/>
          We accept submissions in all disciplines.<br/><br/>
          For more details, Refer Our Author Guideline<br/><br/>
          For any query or submission, please feel free to e-mail us: brightskypublications@gmail.com
        </TabPanel>
        <TabPanel value={value} index={3}>
          If you are looking into publishing your conference proceedings, Bright Sky Publications can provide you this service in competitive prices. We provide publication services for conference proceedings include online and print on all range of disciplines. Conference papers are expected to recommend to us for publishing. We have such substantial publishing experience that we can efficiently publish your conference papers with high quality.<br/><br/>
          Conference proceedings are a collection of Scientific/ Research/ Technical papers that presented at a professional association meeting. These meetings are sometimes referred to as conferences, symposia, workshops, expositions or exhibitions. The proceedings would be of different kinds like- Abstracts, Full length papers, etc<br/><br/>
          We request you to send conference proceedings and related queries to our Email ID: brightskypublications@gmail.com.
        </TabPanel>
        <TabPanel value={value} index={4}>
          A doctorate degree is required for work as a book editor. Interested candidates can email their resume and consent letter to us at brightskypublications@gmail.com. They can also propose new edited books.<br/><br/>
          Proposal for new edited book should contain following:
          <ol>
            <li>Title of edited book</li>
            <li>Scope of edited book</li>
            <li>Consent form</li>
            <li>Resume of editor (should include: color photo, current institutional affiliation)</li>
          </ol>
          Format for Consent Form: Click Here
        </TabPanel>
        <TabPanel value={value} index={5}>
          A doctorate degree is required for work as a book editor. Interested candidates can email their resume and consent letter to us at brightskypublications@gmail.com
        </TabPanel>
        <TabPanel value={value} index={6}>
          Our books are carefully designed and printed on premium quality papers. One can order print copy by contacting our sells department at brightskypublications@gmail.com. You can also contact us at +91-9999779515 .
        </TabPanel>
      </Grid>
    </div>
  );
}