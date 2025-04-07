import React, { useState, useEffect } from 'react';

const WORD_LENGTH = 5;
const MAX_GUESSES = 5;

 // Change this to a word of your choice or select randomly

// Helper function to evaluate a guess against the target word
function evaluateGuess(guess, target) {
  let result = Array(WORD_LENGTH).fill('absent');
  const targetLetters = target.split('');

  // First pass: mark letters that are correct (right letter, right spot)
  for (let i = 0; i < WORD_LENGTH; i++) {
    if (guess[i] === target[i]) {
      result[i] = 'correct';
      targetLetters[i] = null; // remove to avoid duplicate matching
    }
  }
  // Second pass: mark letters that are present (right letter, wrong spot)
  for (let i = 0; i < WORD_LENGTH; i++) {
    if (result[i] !== 'correct' && targetLetters.includes(guess[i])) {
      result[i] = 'present';
      targetLetters[targetLetters.indexOf(guess[i])] = null;
    }
  }
  return result;
}

const WordleGame = () => {
  const [wordOftheDay, getWord] = React.useState('');
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

    const TARGET_WORD = wordOftheDay.word;
  // Create a board state: an array of rows, each row is an array of letters.
  const [guesses, setGuesses] = useState(
    Array(MAX_GUESSES).fill(null).map(() => Array(WORD_LENGTH).fill(''))
  );
  // To store status of each letter in a guess (e.g., 'correct', 'present', 'absent')
  const [statuses, setStatuses] = useState(Array(MAX_GUESSES).fill(null));
  const [currentGuess, setCurrentGuess] = useState('');
  const [currentRow, setCurrentRow] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [resultMessage, setResultMessage] = useState('');

  const handleKeyDown = (event) => {
    if (gameOver) return;

    if (event.key === 'Enter') {
      // Submit guess when the row is full
      if (currentGuess.length === WORD_LENGTH) {
        // Update the guesses board
        const newGuesses = [...guesses];
        newGuesses[currentRow] = currentGuess.split('');
        setGuesses(newGuesses);

        // Evaluate the guess and update statuses
        const rowStatus = evaluateGuess(currentGuess, TARGET_WORD);
        const newStatuses = [...statuses];
        newStatuses[currentRow] = rowStatus;
        setStatuses(newStatuses);

        // Check for win or game over
        if (currentGuess === TARGET_WORD) {
          setGameOver(true);
          setResultMessage("You Win!");
        } else if (currentRow === MAX_GUESSES - 1) {
          setGameOver(true);
          setResultMessage(`Game Over! The word was ${TARGET_WORD}`);
        } else {
          setCurrentRow(currentRow + 1);
        }
        setCurrentGuess('');
      }
    } else if (event.key === 'Backspace') {
      // Remove last letter from current guess
      setCurrentGuess(currentGuess.slice(0, -1));
    } else if (/^[a-zA-Z]$/.test(event.key)) {
      // Append a new letter if the guess is not yet full
      if (currentGuess.length < WORD_LENGTH) {
        setCurrentGuess(currentGuess + event.key.toUpperCase());
      }
    }
  };

  // Add keydown event listener for the game
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentGuess, currentRow, gameOver, guesses, statuses]);

  // Render each row of the game board.
  const renderRow = (rowIndex) => {
    const rowLetters = guesses[rowIndex];
    return (
      <tr key={rowIndex}>
        {rowLetters.map((letter, letterIndex) => {
          // For the current row, use letters from the currentGuess state
          let displayLetter = rowIndex === currentRow ? (currentGuess[letterIndex] || '') : letter;
          // Determine the CSS class based on letter evaluation if available
          let className = "square";
          if (statuses[rowIndex]) {
            className += " " + statuses[rowIndex][letterIndex];
          }
          return (
            <td key={letterIndex} className={className}>
              {displayLetter}
            </td>
          );
        })}
      </tr>
    );
  };

  return (
    <div>
      <table className="table-spacing">
        <tbody>
          {Array.from({ length: MAX_GUESSES }).map((_, i) => renderRow(i))}
        </tbody>
      </table>
      {gameOver && <div className="result">{resultMessage}</div>}
    </div>
  );
};

export default WordleGame;