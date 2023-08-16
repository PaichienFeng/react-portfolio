import React from "react";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import css from '../Project/Project.module.scss';
import calendar from '../img/calendar.jpg';
import color from '../img/color.webp';
import explore from '../img/explore.jpg';
import note from '../img/note.jpg';
import password from '../img/password.jpg';
import weather from '../img/weather.jpg'

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
function List() {
  return (
    <div className={css.container}>
      <Grid container spacing={3}>
        {repoArray.map(repo => (
          <Grid item xs={12} sm={6} md={3} key={repo.title}>
              <Card className={css.animation} sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt={repo.title}
                  height="140"
                  image={repo.img}
                />
                <CardContent>

                  <Link href={repo.deployedLink} className={css.cardLink} >
                    {repo.title}
                  </Link>
                  <Link href={repo.githubLink} className={css.cardLink} >
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                  </Link>
                  <Typography variant="body2" color="text.secondary">
                    {repo.module}
                  </Typography>
                </CardContent>
       
              </Card>
          </Grid>
        ))}
      </Grid>
    </div>

  );
}

export default List;
