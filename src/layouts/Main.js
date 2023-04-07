import React from 'react';
import PropTypes from 'prop-types';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Navigation from '../components/template/Navigation';
import ScrollToTop from '../components/template/ScrollToTop';
import { Divider, Grid } from '@mui/material';

const { PUBLIC_URL } = process.env;

const Main = (props) => (
  <HelmetProvider>
    <ScrollToTop />
    <Grid item xs={12} sx={{backgroundColor: 'aliceblue'}}></Grid>
    <Helmet titleTemplate="%s | SMaRS Lab" defaultTitle="SMaRS Lab" defer={false}>
      {props.title && <title>{props.title}</title>}
      <meta name="description" content={props.description} />
    </Helmet>
    <div id="wrapper">
      <Navigation />
      <div id="main">
        {props.children}
      </div>
    </div>
    <Divider variant="middle" />
    <br/>
    <Grid container spacing={2}>
    <Grid item xs={2}></Grid>
      <Grid item xs={3}>
        <img className='footerLogo' src={'https://smarslab-files.s3.amazonaws.com/smarsgroup/images/footer/USDA.png'} alt='usdaLogo' />
      </Grid>
      <Grid item xs={2}></Grid>
      <Grid item xs={2}>
        <img className='footerLogo' src={'https://smarslab-files.s3.amazonaws.com/smarsgroup/images/footer/UMDGEOG.png'} alt='umdGeogLogo' />
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
  </HelmetProvider>
);

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  fullPage: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
};

Main.defaultProps = {
  children: null,
  fullPage: false,
  title: null,
  description: 'Spatial Modeling and Remote Sensing Lab',
};

export default Main;
