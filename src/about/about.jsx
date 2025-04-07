import React from 'react';
import './about.css';

export function About() {
  // Runs once when the component mounts

  const [wordOfTheDay, getWord] = React.useState('');
  const [definition, setDefinition] = React.useState('Loading...');

  React.useEffect(() => {
    fetch('/api/wordOfTheDay')
  .then(response => response.json())
  .then(wordOftheDay => {
    getWord(wordOftheDay);
  })
  .catch(error => {
    console.error('Error fetching words:', error);
  });
}, []); 

React.useEffect(() => {
  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordOfTheDay.word}`)
      .then((response) => response.json())
      .then((data) => {
        setDefinition(data[0]?.meanings[0]?.definitions[0]?.definition || 'Definition not found');
        
      })
      .catch();
    }, [wordOfTheDay]); 
  

  return (
    <main className="container-fluid bg-dark text-center text-white">
      <div>
        <div id="picture" className="picture-box">
          <img src="kotoba picture.jpg" alt="random" />
        </div>

        <p>
          Kotoba is a fun word game where you have six tries to guess the word of the day. 
          A green square means that you guessed a correct letter in the correct location. A yellow square means the letter is correct but in the wrong location.
          Everyone in the world gets the same word so you can compete with your friends to see who can guess it in the least amount of tries!
        </p>

        <p>
          This game is based heavily on Wordle by the New York Times. Our use of the game is for non-profit
          educational use only. No part of this code or program should be used outside of that definition.
        </p>

        <div id="dailyword" className="dailyword-box bg-dark text-light">
        <p className="quote">
          Today's daily word is: {wordOfTheDay.word}
        </p>
        <p className="definition">
          The definition of this word is: {definition}
        </p>
      </div>
    </div>
  </main>
);
}