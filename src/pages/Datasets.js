import React from 'react';
import Main from '../layouts/Main';
import datasets_tools from '../data/datasets_list';
import "../static/css/pages/_datasets.scss";

export default function Datasets() {
    const archived = datasets_tools['archived'];
    const tools = datasets_tools['tools'];
    return (
        <Main>
            <article className="post" id="datasets">
            {/*<h2>BOOK CHAPTERS & ARCHIVED DATA SETS</h2>*/}
            {/*<div className='archived_list'>*/}
            {/*        <ul>*/}
            {/*        {archived && archived.map((item, key) => {*/}
            {/*            return (*/}
            {/*                <li key={key}> {item} </li>*/}
            {/*            )*/}
            {/*        }*/}
            {/*        )}*/}
            {/*        </ul>*/}
            {/*    </div>*/}
                <h2>TOOLS</h2>
                <div className='tools_list'>
                    <ul>
                        {tools && tools.map((item, key) => {
                            return(
                                <li key={key}><a href = {item.path} target="_blank" rel="noreferrer">{item.name}</a></li>
                            );
                        })}
                    </ul>
                </div>
            </article>
        </Main>
    );
}