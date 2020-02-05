import React from 'react';

// import BgShortenDesktop from '../../images/bg-shorten-desktop.svg';

import globalStyles from '../../app/App.styles.scss';
import mainStyles from './main.module.scss';

import Button from '../button/button.component';

const Main = () => {
  return (
    <main className={mainStyles.main}>
      <input type='text' placeholder='Shorten a link here...' className={mainStyles.input}/>
      <Button
        backgroundColor={globalStyles.primaryCyan}
        borderRadius='0.5rem'
        color='#ffffff'
        padding='1rem 2rem'
        text='Shorten It!'
        width='15%'
      />
    </main>
  )
}

export default Main;