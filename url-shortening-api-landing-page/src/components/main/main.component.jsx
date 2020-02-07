import React, { useState, useEffect } from 'react';
import uuid from 'uuid/v4';

import globalStyles from '../../app/App.styles.scss';
import mainStyles from './main.module.scss';

import Button from '../button/button.component';
import Result from '../result/result.component';

const Main = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [longLink, setLongLink] = useState('');
  const [shortLink, setShortLink] = useState('');
  const [links, setLinks] = useState(() => {
    const persistedData = localStorage.getItem('links');
    return persistedData ? JSON.parse(persistedData) : [];
  });

  /**
   * Information for fetching data from the api
   */
  const api = `https://rel.ink/api/links/`;
  const prefix = `https://rel.ink/`;
  const data = { url: longLink };
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify(data)
  };

  useEffect(() => {
    localStorage.setItem('links', JSON.stringify(links));

    fetch(api, options)
      .then(data => {
        return data.json();
      })
      .then(res => {
        setShortLink(`${prefix}${res.hashid}`);
      })
      .catch(error => {
        console.log(error);
      });
  }, [api, isClicked, links, longLink, options, prefix, shortLink]);

  const handleSubmit = e => {
    e.preventDefault();
    setIsClicked(true);

    /**
     * When the input value does not contain https or http, the longLink equals to empty
     * because the api won't get any results for the links without those keywords
     */
    const userInput = e.target.userInput.value;
    if (
      userInput === '' ||
      !userInput.includes('https') ||
      !userInput.includes('http')
    ) {
      setLongLink('');
    } else {
      setLongLink(userInput);
      setLinks([
        ...links,
        { longLink: userInput, shortLink: shortLink, id: uuid() }
      ]);
    }

    /**
     * Clear the input value once the form is submitted
     */
    e.target.userInput.value = '';
  };

  const handleButtonClick = e => {
    e.target.innerText = 'Copied!';
    e.target.style.backgroundColor = `${globalStyles.darkViolet}`;

    /**
     * Copy the shorten link to the clipboard
     */
    navigator.clipboard.writeText(e.target.previousSibling.innerText);
  };

  const handleLinkClick = e => {
    /**
     * Copy the shorten link to the clipboard
     */
    navigator.clipboard.writeText(e.target.innerText);
  };

  const handleInputChange = e => {
    setLongLink(e.target.value);
  };

  return (
    <main className={mainStyles.main}>
      <form className={mainStyles.form} onSubmit={handleSubmit}>
        <input
          name='userInput'
          type='text'
          placeholder='Shorten a link here...'
          className={
            isClicked && !longLink ? mainStyles.noInput : mainStyles.input
          }
          onChange={handleInputChange}
        />
        <Button
          backgroundColor={globalStyles.primaryCyan}
          borderRadius='0.5rem'
          color='#ffffff'
          padding='1rem 2rem'
          text='Shorten It!'
          width='15%'
        />
        <p
          className={
            isClicked && !longLink ? mainStyles.error : mainStyles.noError
          }
        >
          Please add a link (that includes http or https)
        </p>
      </form>
      <div className={mainStyles.resultContainer}>
        {(links && shortLink !== null) ||
        shortLink !== '' ||
        shortLink !== undefined
          ? links.map(link => {
              return (
                <Result
                  key={link.id}
                  originalLink={link.longLink}
                  shortenLink={link.shortLink}
                  handleButtonClick={handleButtonClick}
                  handleLinkClick={handleLinkClick}
                />
              );
            })
          : null}
      </div>
    </main>
  );
};

export default Main;
