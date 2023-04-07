import React from 'react';
import Main from '../layouts/Main';
import { Grid, Card, CardContent, Divider } from '@mui/material';
// import Carousel from 'react-material-ui-carousel';
import { NavigateBefore, NavigateNext } from '@mui/icons-material/';
import imageArr from '../data/home_image_list';
import "../static/css/pages/_home.scss";
import LaunchIcon from '@mui/icons-material/Launch';
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const { PUBLIC_URL } = process.env;
export default function Index() {
    return (
        <Main
            description={'Spatial Modeling and Remote Sensing Lab, UMD Geo Department, '
                + 'ABC, and .'}
        >
            <article className="post" id="index">
                <Grid
                    container
                    direction='row'
                    columnSpacing={2}
                    rowSpacing={2}
                    alignItems='center'
                    justifyContent='center'>
                    <Grid item xs={12} sx={{marginTop:'-25px'}}>
                        <p className='heading'><strong>Welcome to SMaRS Lab at USDA-ARS ALARC </strong> </p>
                    </Grid>
                    <Grid item xs={12}>
                        <Divider />
                    </Grid>
                    <Grid item xs={8}>
                        <Card sx={{ backgroundColor: 'transparent'}}>
                            <CardContent>
                                <Carousel
                                    autoPlay={true}
                                    emulateTouch={true}
                                    infiniteLoop={true}
                                    showArrows={false}
                                    showIndicators={true}
                                    showStatus={false}
                                    showThumbs={false}
                                >
                                    <div>
                                        <img src={'https://smarslab-files.s3.amazonaws.com/smarsgroup/images/home/CropPhenology.png'} />
                                    </div>
                                    <div>
                                        <img src={'https://smarslab-files.s3.amazonaws.com/smarsgroup/images/home/PreseasonCropMapping.png'} />
                                    </div>
                                    <div>
                                        <img src={'https://smarslab-files.s3.amazonaws.com/smarsgroup/images/home/GeoCropSim.png'} />
                                    </div>
                                    <div>
                                        <img src={'https://smarslab-files.s3.amazonaws.com/smarsgroup/images/home/LCLUC.png'} />
                                    </div>
                                    <div>
                                        <img src={'https://smarslab-files.s3.amazonaws.com/smarsgroup/images/home/CropMonitoring.png'} />
                                    </div>
                                </Carousel>
                            </CardContent>
                        </Card>
                        {/*<Card sx={{ backgroundColor: 'transparent'}}>*/}
                        {/*    <CardContent>*/}
                        {/*        <Carousel*/}
                        {/*            NextIcon={<NavigateNext />}*/}
                        {/*            PrevIcon={<NavigateBefore />}*/}
                        {/*            indicators={true}*/}
                        {/*            indicatorIconButtonProps={{*/}
                        {/*                style: {*/}
                        {/*                    backgroundColor: 'transparent',*/}
                        {/*                    paddingTop: '160px'*/}
                        {/*                }*/}
                        {/*            }}*/}
                        {/*            IndicatorIcon={<div/>}*/}
                        {/*            navButtonsAlwaysVisible={true}*/}
                        {/*            stopAutoPlayOnHover={false}*/}
                        {/*            fullHeightHover={false}*/}
                        {/*            navButtonsProps={{*/}
                        {/*                style: {*/}
                        {/*                    backgroundColor: 'transparent'*/}
                        {/*                }*/}
                        {/*            }}*/}
                        {/*        >*/}
                        {/*            {imageArr.map((item, key) =>*/}
                        {/*              <img*/}
                        {/*                key={key}*/}
                        {/*                className='slider-home'*/}
                        {/*                src={item.path}*/}
                        {/*                alt={`${key}`}*/}
                        {/*                importance="low"*/}
                        {/*              />*/}
                        {/*            )}*/}
                        {/*        </Carousel>*/}
                        {/*    </CardContent>*/}
                        {/*</Card>*/}
                    </Grid>
                    <Grid 
                        container 
                        item xs={12} 
                        direction='row' 
                        columnSpacing={2} 
                        alignItems='stretch'
                    >
                        <Grid item xs={6}>
                            <Card sx={{ paddingTop: '30px', height: '100%', backgroundColor: '#f7f7e9', boxShadow: "5px 5px lightGrey"}}>
                                <CardContent>
                                    <p>
                                        The Spatial Modeling and Remote Sensing (SMaRS) lab investigates the methods to improve
                                        crop modeling capabilities to reliably simulate crop growth, carbon, nitrogen and water
                                        interactions at multiples spatial scales, and develops operational decision support tools
                                        and data products using process based crop modeling and remote sensing.
                                    </p>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={6}>
                            <Card sx={{ backgroundColor: '#f7f7e9', boxShadow: "5px 5px lightGrey", height: '100%' }}>
                                <CardContent>
                                    <p className='recentnewsheader'>Recent News</p>
                                    <ul>
                                        <li>
                                            <p>
                                                The short story on Geo-CropSim modeling framework was published in <a
                                                  target="_blank"
                                                  rel="noopener noreferrer"
                                                  href="https://appliedsciences.nasa.gov/our-impact/story/geo-cropsim-new-water-use-and-crop-yield-simulator"
                                                > NASA applied sciences </a> program website. More news <Link
                                                    style={{ textDecoration: 'none' }}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    to={"/news"}
                                                    onClick={() => {}}>
                                                        <LaunchIcon sx={{ fontSize: 18, top: '2px', position: 'relative' }}></LaunchIcon>
                                                </Link>
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                Post-doctoral researcher position is available at SMaRS Lab. Apply here at
                                            </p>
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>

                    <Grid item xs={6} className='intro3'>
                        <p> Address: USDA-ARS Plant Physiology and Genetics Unit </p>
                        <p> 21881 North Cardon Lane, Maricopa, AZ 85138 </p>
                        <p> <a href='prasad.bandaru@usda.gov'>prasad.bandaru@usda.gov</a> Ph: 520-316-6357 </p>
                    </Grid>

                </Grid>
            </article>
        </Main>
    );
}
