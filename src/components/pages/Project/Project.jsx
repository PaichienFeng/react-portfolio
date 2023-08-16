import React from "react";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import css from '../Project/Project.module.scss';




function Project(props) {
    const repo = props.repoArray;

    return (
        <Grid container spacing={3}>
            {repo.map(repo => (
                <Grid item xs={12} sm={6} md={3} key={repo.title}>
                    <Card className={css.animation} sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt={repo.title}
                            height="140"
                            image={repo.img}
                        />
                        <CardContent>

                            <Link target='_blank' href={repo.deployedLink} className={css.cardLink} >
                                {repo.title}
                            </Link>
                            <Link target='_blank' href={repo.githubLink} className={css.cardLink} >
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
    )
}

export default Project;