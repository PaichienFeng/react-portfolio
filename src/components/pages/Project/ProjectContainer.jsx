import React from "react";
import css from '../Project/Project.module.scss';
import calendar from '../img/calendar.jpg';
import color from '../img/color.webp';
import explore from '../img/explore.jpg';
import note from '../img/note.jpg';
import password from '../img/password.jpg';
import weather from '../img/weather.jpg'

import Project from "./Project";

const repoArray =
  [
    {
      title: 'Note Taker',
      module: 'Express',
      img: note,
      githubLink: 'https://github.com/PaichienFeng/Note-Taker',
      deployedLink: 'https://notetaker-paichien.herokuapp.com/',
    },
    {
      title: 'Mix Color Game',
      module: 'Project',
      img: color,
      githubLink: 'https://github.com/PaichienFeng/Mix-Colour-Game',
      deployedLink: 'https://paichienfeng.github.io/Mix-Colour-Game/'
    },
    {
      title: 'Weather Search',
      module: 'Server-Side API',
      img: weather,
      githubLink: 'https://github.com/PaichienFeng/Weather-Search',
      deployedLink: 'https://paichienfeng.github.io/Weather-Search/'
    },
    {
      title: 'Daily Planner',
      module: 'Third Party API',
      img: calendar,
      githubLink: 'https://github.com/PaichienFeng/Daily-Planner',
      deployedLink: 'https://paichienfeng.github.io/Daily-Planner/'
    },
    {
      title: 'KidsHub',
      module: 'Project',
      img: explore,
      githubLink: 'https://github.com/peterwonghg/KidsHub',
      deployedLink: 'https://morning-reef-37126-3c2d5ab785ed.herokuapp.com/'
    },
    {
      title: 'Password Generator',
      module: 'Javascript',
      img: password,
      githubLink: 'https://github.com/PaichienFeng/Password-Generator',
      deployedLink: 'https://paichienfeng.github.io/Password-Generator/'
    }
  ]
// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function ProjectContainer() {
  return (
    <div className={css.container}>
        <Project 
          repoArray={repoArray}
        />
    </div>
  );
}

export default ProjectContainer;
