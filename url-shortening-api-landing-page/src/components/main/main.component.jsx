import React from 'react';

// import BgShortenDesktop from '../../images/bg-shorten-desktop.svg';

import globalStyles from '../../app/App.styles.scss';
import mainStyles from './main.module.scss';

import Button from '../button/button.component';

const Main = () => {
  return (
    <main className={mainStyles.main}>
      <input type='text' value='Shorten a link here' className={mainStyles.input}/>
      <Button
        backgroundColor={globalStyles.primaryCyan}
        color='#ffffff'
        text='Shorten It!'
      />
    </main>
  )
}

export default Main;