import React from 'react';
import Main from '../layouts/Main';
import projects_list from '../data/projects_list';
import "../static/css/pages/_projects.scss";

export default function Projects() {
    return (
        <Main>
            <article className="post" id="projects">
                <div className='projects_list'>
                    <h2>PROJECTS</h2>
                    <ul>
                        {projects_list && projects_list.map((item, key) => {
                            return(
                                <li key={key}><a href = {item.path} target="_blank" rel="noreferrer"> {item.title} </a></li>
                            );
                        })}
                    </ul>
                </div>
            </article>
        </Main>
    );
}