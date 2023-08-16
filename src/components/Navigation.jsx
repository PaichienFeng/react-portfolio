import React from 'react';
import { Link } from 'react-router-dom';
import css from './Header/Header.module.scss'
import CustomizedMenus from '../components/navBurger'

function Navigation() {
  return (
    <div>

      <div className={css.nav}>
        <Link className={css.link} to='/'>Home</Link>
        <Link className={css.link} to='/contact'>Contact</Link>
        <Link className={css.link} to='/project'>Portfolio</Link>
        <Link className={css.link} to='/resume'>Resume</Link>
      </div>
      
      <div>
      <CustomizedMenus />
      </div>
    </div>
  );
}

export default Navigation;
