import React from 'react';
import Navigation from '../Navigation';
import css from '../Header/Header.module.scss';

export default function Header() {
  return (
    <header className={css.header}>
      <div className={css.headerContent}>
        <h1 className={css.name}>
          Paichien Feng
        </h1>
        <Navigation />
      </div>
    </header>
  );
}
