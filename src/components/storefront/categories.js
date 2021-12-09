import { useState } from 'react';
import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { connect } from 'react-redux';
import './categories.scss';

function TabPanel(props) {
  const { children, value, index, ...other } = props;


  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function Categories(props) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    console.log('event', event.target.name);
    props.selectCategory(event.target.name);
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }} data-testid="categories">
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Indoor plants" {...a11yProps(0)} name='indoor'/>
          <Tab label="Outdoor plants" {...a11yProps(1)} name='outdoor'/>
          <Tab label="If you kill plants" {...a11yProps(2)} name='easy'/>
        </Tabs>
      </Box>
      <Box id='categoryValues'>
        <TabPanel value={value} name='indoor' index={0}>
          <p>indoor plants</p>
        </TabPanel>
        <TabPanel value={value} name='outdoor'index={1}>
          <p>outdoor plants</p>
        </TabPanel>
        <TabPanel value={value} name='easy' index={2}>
          <p>if you kill plants</p>
        </TabPanel>
      </Box>
    </Box>
  );
}

const mapStateToProps = state => {
  return {
    categories: state.categories.categoryList,
  };
};

const mapDispatchToProps = dispatch => ({
  selectCategory: (category) => dispatch({type: 'SELECT_CATEGORY', payload: category}),
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
