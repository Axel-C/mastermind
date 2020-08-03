import React from 'react';
import Board from './Board.js'
import './App.css';

function Game() {
  let target = generateRandomTarget();
  return (
    <div className="App">
      <header className="App-header">
        <h1>Mastermind</h1>
      </header>
      <Board target={target} ></Board>

    </div>
  );
}

function generateRandomTarget(){
  return Array(4).fill().map(() => Math.round(Math.random() * 5));
}

export default Game;
