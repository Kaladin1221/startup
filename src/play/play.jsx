import React from 'react';
import WordleGame from './wordlegame.jsx';
import './play.css';

export const Play = () => {
  return (
    <div className="game center">
      <WordleGame wordLength={6} />
    </div>
  );
};