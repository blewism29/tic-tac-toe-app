import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import Turn from './Components/Turn'
import Board from './Components/Board'

export default class App extends Component {
  
  handleSquareClick(squareClicked) {
    Alert.alert('You tapped! ' + squareClicked )
  }

  render() {
    return (
      <View style={styles.container}>
        
        <Turn playerName='Player 1'/>
        <Board 
          style={styles.board_container} 
          onClick={this.handleSquareClick}
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
