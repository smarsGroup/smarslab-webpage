import React from 'react';
import Main from '../layouts/Main';
import research_list from '../data/research_list';
import { Grid, Accordion, AccordionSummary, AccordionDetails} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Carousel from 'react-material-ui-carousel'
import { NavigateBefore, NavigateNext } from '@mui/icons-material/';
import "../static/css/pages/_research.scss";

const { PUBLIC_URL } = process.env;

export default function Research() {
    return (
        <Main>
            <article className="post" id="research">
            <h2>Research</h2>
                <Grid container direction='column' alignItems='center' justifyContent='center'>
                    <Grid item xs={12}>
                        <p >
                            {research_list && research_list[0].description}
                        </p>
                    </Grid>
                    <Grid item xs={12}>
                    {research_list && research_list.map((item, key) => {
                            if (key !== 0) {
                                return (
                        <Accordion key={key}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                sx={{backgroundColor: 'aliceblue', paddingTop: '0.5em', paddingBottom: '0.5em'}}
                                aria-controls="panel1a-content"
                                id={`panel1a-header${key}`}
                            >
                                <h4 style={{margin: 0}}>{item.title}</h4>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Grid container item xs={12} alignItems='center' justifyContent='center'>
                                    <Grid item xs={10}>
                                <p>{item.description}</p>
                                </Grid>
                                <Grid item xs={6}>
                                <Carousel
                                    NextIcon={<NavigateNext />}
                                    PrevIcon={<NavigateBefore />}
                                    indicators={false}
                                    navButtonsAlwaysVisible={true}
                                    stopAutoPlayOnHover={false}
                                    fullHeightHover={false}
                                    navButtonsProps={{
                                        style: {
                                            backgroundColor: 'transparent',
                                            borderRadius: 0
                                        }
                                    }}
                                >
                                    {item.imageArr && item.imageArr.map((item, key) => {
                                        return (
                                            <div key={key}>
                                                <img className='slider' src={item} alt={`${key}`}/>
                                            </div>
                                        )
                                    })}
                                </Carousel>
                                </Grid>
                                </Grid>
                            </AccordionDetails>
                        </Accordion>
                        )
                    } else return null;
                })}
                    </Grid>
                </Grid>
            </article>
        </Main>
    );
}