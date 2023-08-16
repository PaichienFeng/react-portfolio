import React from "react";
import css from '../Project/Project.module.scss';

const repoArray =
  [
    {
      title: 'Note Taker',
      module: 'Express',
      githubLink: 'https://github.com/PaichienFeng/Note-Taker',
      deployedLink: 'https://github.com/PaichienFeng/Note-Taker',
    },
    {
      title: 'Mix Color Game',
      module: 'Project',
      githubLink: 'https://github.com/PaichienFeng/Mix-Colour-Game',
      deployedLink: 'https://paichienfeng.github.io/Mix-Colour-Game/'
    },
    {
      title: 'Weather Search',
      module: 'Server-Side API',
      githubLink: 'https://github.com/PaichienFeng/Weather-Search',
      deployedLink: 'https://paichienfeng.github.io/Weather-Search/'
    },
    {
      title: 'Daily Planner',
      module: 'Third Party API',
      githubLink: 'https://github.com/PaichienFeng/Daily-Planner',
      deployedLink: 'https://paichienfeng.github.io/Daily-Planner/'
    },
    {
      title: 'KidsHub',
      module: 'Project',
      githubLink: 'https://github.com/peterwonghg/KidsHub',
      deployedLink: 'https://morning-reef-37126-3c2d5ab785ed.herokuapp.com/'
    },
    {
      title: 'Password Generator',
      module: 'Javascript',
      githubLink: 'https://github.com/PaichienFeng/Password-Generator',
      deployedLink: 'https://paichienfeng.github.io/Password-Generator/'
    }
  ]
// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function List() {
  return (
    <div className={css.container}>

    <ul >
      {/* Here we map over each grocery item and return a new array of `li` elements that contains the grocery name */}
      {/* When using map you must provide a unique key attribute to each item. Ours is `item.id` */}
      {repoArray.map(repo => (
        <li  key={repo.title}>
          {repo.title}
        </li>
      ))}
    </ul>
    </div>
  );
}

export default List;
