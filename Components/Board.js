import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import PropTypes from 'prop-types';
import Square from './Square'

const propTypes = {
    onClick: PropTypes.func.isRequired,
    boardGame: PropTypes.array.isRequired
};

class Board extends Component {
    
    CONSTANTS = {
        PLAYER1_MOVE: "X",
        PLAYER2_MOVE: "O"
    };

    evaluatePosition(row, col) {
        return this.props.boardGame[row][col] == true || this.props.boardGame[row][col] == false ? true : false
    }

    drawPosition(row, col) {
        switch (this.props.boardGame[row][col]) {
            case true:
                return this.CONSTANTS.PLAYER1_MOVE;
            case false:
                return this.CONSTANTS.PLAYER2_MOVE;
            default:
                return "";
        }
    }

    render() {
        return (    
            <View style={styles.container}> 
            
                <View style={styles.row}> 
                    <Square 
                        onClick={ this.props.onClick } 
                        row={0}
                        column={0}
                        disabled={ this.evaluatePosition(0, 0) }
                        mark={ this.drawPosition(0, 0) }
                    />
                    <Square 
                        onClick={ this.props.onClick } 
                        row={0}
                        column={1}
                        disabled={ this.evaluatePosition(0, 1) }
                        mark={ this.drawPosition(0, 1) }
                    />
                    <Square 
                        onClick={ this.props.onClick } 
                        row={0}
                        column={2}
                        disabled={ this.evaluatePosition(0, 2) }
                        mark={ this.drawPosition(0, 2) }
                    />
                </View>

                <View style={styles.row}> 
                    <Square 
                        onClick={ this.props.onClick } 
                        row={1}
                        column={0}
                        disabled={ this.evaluatePosition(1, 0) }
                        mark={ this.drawPosition(1, 0) }
                    />
                    <Square 
                        onClick={ this.props.onClick } 
                        row={1}
                        column={1}
                        disabled={ this.evaluatePosition(1, 1) }
                        mark={ this.drawPosition(1, 1) }
                    />
                    <Square 
                        onClick={ this.props.onClick } 
                        row={1}
                        column={2}
                        disabled={ this.evaluatePosition(1, 2) }
                        mark={ this.drawPosition(1, 2) }
                    />
                </View>
                
                <View style={styles.row}> 
                    <Square 
                        onClick={ this.props.onClick } 
                        row={2}
                        column={0}
                        disabled={ this.evaluatePosition(2, 0) }
                        mark={ this.drawPosition(2, 0) }
                    />
                    <Square 
                        onClick={ this.props.onClick } 
                        row={2}
                        column={1}
                        disabled={ this.evaluatePosition(2, 1) }
                        mark={ this.drawPosition(2, 1) }
                    />
                    <Square 
                        onClick={ this.props.onClick } 
                        row={2}
                        column={2}
                        disabled={ this.evaluatePosition(2, 2) }
                        mark={ this.drawPosition(2, 2) }
                    />
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
    }
  });

Board.propTypes = propTypes;

export default Board;