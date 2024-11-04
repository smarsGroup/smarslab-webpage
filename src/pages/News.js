import React from 'react';
import Main from '../layouts/Main';
import { Grid } from '@mui/material';
import "../static/css/pages/_research.scss";
import news from "../data/news_list";

export default function News() {
  return (
    <Main>
      <article className="post" id="news">
        <h2>News</h2>
        <Grid container direction='column' alignItems='left' justifyContent='center'>
          <Grid item xs={12}>
            <ul>
              {news && news.map((item, key) => {
                  return (
                    <li key={key} dangerouslySetInnerHTML={{ __html: item }}></li>
                  )
                }
              )}
            </ul>
          </Grid>
        </Grid>
      </article>
    </Main>
  );
}