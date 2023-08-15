import React from 'react';
import { Link } from 'react-router-dom';
import css from './Header/Header.module.scss'


function Navigation() {
  return (
    <div className={css.nav}>
      <Link className={css.link} to='/'>Home</Link>
      <Link className={css.link} to='/contact'>Contact</Link>
      <Link className={css.link} to='/project'>Project</Link>
      <Link className={css.link} to='/resume'>Resume</Link>
    </div>
  );
}

export default Navigation;
