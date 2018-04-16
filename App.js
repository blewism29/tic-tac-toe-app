import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import Player from './Components/Player'
import Board from './Components/Board'

export default class App extends Component {
  
  handleSquareClick(row, column) {
    Alert.alert(row + ' - ' + column );
  };

  checkEndGame() {
    
  }

  boardGame = [ 
    [null, null, null], 
    [null, null, null], 
    [null, null, null], 
  ];

  CONSTANTS = {
    PLAYER1: "Player 1",
    PLAYER2: "COM"
  };

  currentPlayer = this.CONSTANTS.PLAYER1;

  render() {
    return (
      <View style={styles.container}>
        
        <Player playerName={this.currentPlayer}/>
        
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
