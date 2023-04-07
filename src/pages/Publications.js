import React from 'react';
import Main from '../layouts/Main';
import peer_reviewed from '../data/publications_list';
import {book_chapters} from "../data/publications_list";
import "../static/css/pages/_publications.scss";

export default function Publications() {
    return (
        <Main>
            <article className="post" id="publications">
                <h2>PEER-REVIEWED PUBLICATIONS</h2>
                <div className='peer_reviewed_list'>
                    <ul>
                    {peer_reviewed && peer_reviewed.map((item, key) => {
                        return (
                          <li key={key}>{item}</li>
                            // <li key={key}>{item}</li>
                        )
                    }
                    )}
                    </ul>
                </div>
              <div className='archived_list'>
                <h2>BOOK CHAPTERS & ARCHIVED DATASETS</h2>
                <ul>
                  {book_chapters && book_chapters.map((item, key) => {
                      return (
                        <li key={key}> {item} </li>
                      )
                    }
                  )}
                </ul>
              </div>
            </article>
        </Main>
    );
}