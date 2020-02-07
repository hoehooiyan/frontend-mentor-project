import React, { useState, useEffect } from 'react';
import uuid from 'uuid/v4';

import globalStyles from '../../app/App.styles.scss';
import mainStyles from './main.module.scss';

import Button from '../button/button.component';
import Result from '../result/result.component';

const Main = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [longLink, setLongLink] = useState('');
  const [shortenLink, setShortenLink] = useState('');
  // const [links, setLinks] = useState([]);
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

  /**
   * When the page first renders/ re-render if there's some updates
   */
  useEffect(() => {
    localStorage.setItem('links', JSON.stringify(links));

    if (isClicked && longLink !== '') {
      fetch(api, options)
        .then(data => {
          return data.json();
        })
        .then(res => {
          setShortenLink(`${prefix}${res.hashid}`);
          // console.log(res);
          // if (shortenLink === ''){
          // }
          console.log(shortenLink);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [api, isClicked, longLink, shortenLink, options, prefix, links]);

  const handleSubmit = e => {
    e.preventDefault();
    setIsClicked(true);

    /**
     * When the input value does not contain https or http, the longLink equals to empty
     * because the api won't get any results for the links without those keywords
     */
    const userInput = e.target.userInput.value;
    if (!userInput.includes('https') || !userInput.includes('http')) {
      setLongLink('');
    } else {
      setLongLink(userInput);
      setLinks([
        ...links,
        {
          longLink: userInput,
          shortenLink: shortenLink,
          id: uuid()
        }
      ]);
    }

    /**
     * Clear the input value once the form is submitted
     */
    e.target.userInput.value = '';
  };

  const handleButtonClick = e => {
    console.log(e.target);
    e.target.innerText = 'Copied!';
    e.target.style.backgroundColor = `${globalStyles.darkViolet}`;

    /**
     * Copy the shorten link to the clipboard
     */
    navigator.clipboard.writeText(shortenLink);
  };

  const handleLinkClick = e => {
    /**
     * Copy the shorten link to the clipboard
     */
    navigator.clipboard.writeText(shortenLink);
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
        {links
          ? links.map(link => {
              return (
                <Result
                  key={link.id}
                  originalLink={link.longLink}
                  shortenLink={link.shortenLink}
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
