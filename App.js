import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import Player from './Components/Player'
import Board from './Components/Board'

export default class App extends Component {
  
  CONSTANTS = {
    PLAYER1: "Player 1",
    PLAYER2: "COM"
  };

  handleSquareClick(row, column) {
    Alert.alert(row + ' - ' + column );
  };

  checkEndGame() {
    
  }
  
  newBoard() {
    return [
      [0, 0, 0], 
      [0, 0, 0], 
      [0, 0, 0]
    ];
  }

  newGame() {
    this.boardGame = this.newBoard(); 
    this.currentPlayer = this.CONSTANTS.PLAYER1;
  }

  componentWillMount() {
    this.newGame();
  }

  render() {
    return (
      <View style={ styles.container }>
        
        <Player playerName={ this.currentPlayer } />
        
        <Board 
          style={ styles.board_container } 
          onClick={ this.handleSquareClick }
          boardGame={ this.boardGame }
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
