import React from 'react';
import css from '../Footer/Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Blog() {
  return (
    <div className={css.iconContainer}>
      <a className={css.icon} target="_blank" href="https://github.com/PaichienFeng">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a className={css.icon} target="_blank" href="https://linkedin.com/in/yourusername">
        <FontAwesomeIcon icon={faLinkedin}  size="2x"/>
      </a>
      <a className={css.icon} target="_blank" href="https://twitter.com/yourusername">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
    </div>
  );
}
