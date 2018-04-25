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
    
    this.boardGame[row][column] = 1;
    this.setState({ boardGame : this.boardGame });

    this.setState({ currentPlayer: this.CONSTANTS.PLAYER2 });
    
    if (!this.checkEndGame()) {
      const newBoard = [
        [...this.boardGame[0]], 
        [...this.boardGame[1]],
        [...this.boardGame[2]]
      ];

      const score = Minimax.makeMove(newBoard, -1, -1, 0);
      if (score !== null) {
        const move = Minimax.lastMove;
        this.boardGame[move.row][move.column] = -1;
        this.setState ({ boardGame: this.boardGame });
        console.log(move);
      }
    }

    this.setState({ currentPlayer: this.CONSTANTS.PLAYER1 });

    //console.log(this.boardGame);
  };

  checkEndGame () {
    return Minimax.gameOver(this.boardGame);
  }
  
  newBoard () {
    return [
      [0, 0, 0], 
      [0, 0, 0], 
      [0, 0, 0]
    ];
  }

  newGame () {
    this.boardGame = this.newBoard(); 
    this.currentPlayer = this.CONSTANTS.PLAYER1;
  }

  componentWillMount () {
    this.newGame();
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
