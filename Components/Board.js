import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import PropTypes from 'prop-types';

const propTypes = {
    onClick: PropTypes.func.isRequired
};

class Board extends Component {
  render() {
    return (    
        <View style={styles.container}> 
        
            <View style={styles.row}> 
                <View style={styles.square}>
                <Button 
                    style={styles.square_button} 
                    title="" 
                    onPress={ () => this.props.onClick(1) } 
                />
                </View>
                <View style={styles.square} />
                <View style={styles.square} />
            </View>

            <View style={styles.row}> 
                <View style={styles.square} />
                <View style={styles.square} />
                <View style={styles.square} />
            </View>
            
            <View style={styles.row}> 
                <View style={styles.square} />
                <View style={styles.square} />
                <View style={styles.square} />
            </View>
        
        </View>
    );
  }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    row: {
      backgroundColor: '#dadee5',
      flexDirection: 'row'
    },
    square: {
      borderStyle: 'solid',
      borderColor: '#000000',
      borderWidth: 1,
      width: 100,
      height: 100
    },
    square_button: {
      width: 100,
      height: 200
    }
  });

Board.propTypes = propTypes;

export default Board;