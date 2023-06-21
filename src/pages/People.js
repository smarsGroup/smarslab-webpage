import React from 'react';
import Main from '../layouts/Main';
import people_list from '../data/people_list';
import { Grid, Card, CardContent, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "../static/css/pages/_people.scss";

const present_people = people_list[0]['present'];
const former_people = people_list[0]['former'];

export default function People() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Main>
      <article className="post" id="people">
        <Grid container direction='column' rowSpacing={2}>
          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{ paddingTop: '0.5em', paddingBottom: '0.5em' }}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <h2 style={{ margin: 0 }}>Meet the Present Team</h2>
            </AccordionSummary>
            <AccordionDetails>
              {
                present_people.sort((person1, person2) => {
                  let name1 = person1.name.split(' ');
                  let lastName1 = name1[name1.length - 1];
                  let name2 = person2.name.split(' ');
                  let lastName2 = name2[name2.length - 1];
                  return lastName1.localeCompare(lastName2);
                }).map((item, key) => {
                  return (
                    <div key={key}>
                      <Card>
                        <CardContent>
                          <Grid container justify='space-between'>
                            <Grid item xs={4}>
                              <img
                                className='people_image'
                                src={item.photo}
                                srcSet={item.photo}
                                alt={item.name}
                                loading="lazy"
                              />
                            </Grid>
                            <Grid item xs={8}>
                              <h3>{item.name}</h3>
                              <p>{item.data}</p>
                            </Grid>
                          </Grid>
                        </CardContent>
                      </Card>
                      <br />
                    </div>
                  )
                })}
            </AccordionDetails>
          </Accordion>
          <br />
          <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{ paddingTop: '0.5em', paddingBottom: '0.5em' }}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <h2 style={{ margin: 0 }}>Former Team Members</h2>
            </AccordionSummary>
            <AccordionDetails>
              {former_people.sort((person1, person2) => {
                  let name1 = person1.name.split(' ');
                  let lastName1 = name1[name1.length - 1];
                  let name2 = person2.name.split(' ');
                  let lastName2 = name2[name2.length - 1];
                  return lastName1.localeCompare(lastName2);
                }).map((item, key) => {
                return (
                  <div key={key}>
                    <Card >
                      <CardContent>
                        <Grid container direction='row' justify='space-between'>
                          <Grid item xs={4}>
                            <img
                              className='people_image'
                              src={item.photo}
                              srcSet={item.photo}
                              alt={item.name}
                              loading="lazy"
                            />
                          </Grid>
                          <Grid item xs={8}>
                            <h3>{item.name}</h3>
                            <p>{item.data}</p>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Card>
                    <br />
                  </div>
                )
              })}
            </AccordionDetails>
          </Accordion>
        </Grid>
      </article>
    </Main>
  );
}