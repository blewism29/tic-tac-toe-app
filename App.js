import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import Player from './Components/Player'
import Board from './Components/Board'
import Minimax from './Logic/Minimax'

export default class App extends Component {
  
  CONSTANTS = {
    PLAYER1: "Player 1",
    PLAYER2: "COM"
  };

  handleSquareClick (row, column) {

    const boardCopy = [...this.state.boardGame];
    boardCopy[row][column] = 1;
    
    this.setState({ boardGame: boardCopy, currentPlayer: this.CONSTANTS.PLAYER2 });
    
    if (!this.checkEndGame()) {
      const newBoard = [
        [...this.state.boardGame[0]], 
        [...this.state.boardGame[1]],
        [...this.state.boardGame[2]]
      ];

      const score = Minimax.makeMove(newBoard, -1, -1, 0);
      if (score !== null) {
        const move = Minimax.lastMove;
        const board = [...this.state.boardGame];
        board[move.row][move.column] = -1;
        
        this.setState({ boardGame: board });
        console.log(move);
      }
    }

    this.setState({ currentPlayer: this.CONSTANTS.PLAYER1 });
  };

  checkEndGame () {
    return Minimax.gameOver(this.state.boardGame);
  }
  
  newBoard () {
    return [
      [0, 0, 0], 
      [0, 0, 0], 
      [0, 0, 0]
    ];
  }

  newGame () {
    this.setState({ boardGame: this.newBoard(), currentPlayer: this.CONSTANTS.PLAYER1 });
  }

  constructor (props) {
    super(props);
    this.handleSquareClick = this.handleSquareClick.bind(this);

    this.state = {
      currentPlayer: this.CONSTANTS.PLAYER1,
      boardGame: this.newBoard()
    };
  }

  render () {
    return (
      <View style={ styles.container }>
        
        <Player playerName={ this.state.currentPlayer } />
        
        <Board 
          onClick={ this.handleSquareClick }
          boardGame={ this.state.boardGame }
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50
  }
});
