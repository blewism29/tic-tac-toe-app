import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import PropTypes from 'prop-types';
import Square from './Square'

const propTypes = {
    onClick: PropTypes.func.isRequired,
    boardGame: PropTypes.array.isRequired
};

class Board extends Component {

    render() {
        return (    
            <View style={styles.container}> 
            
                <View style={styles.row}> 
                    <Square 
                        onClick={this.props.onClick} 
                        row={0}
                        column={0}
                        move={this.props.boardGame[0][0]}
                    />
                    <Square 
                        onClick={this.props.onClick} 
                        row={0}
                        column={1}
                        move={this.props.boardGame[0][1]}
                    />
                    <Square 
                        onClick={this.props.onClick} 
                        row={ 0 }
                        column={ 2 }
                        move={this.props.boardGame[0][2]}
                    />
                </View>

                <View style={styles.row}> 
                    <Square 
                        onClick={this.props.onClick} 
                        row={1}
                        column={0}
                        move={this.props.boardGame[1][0]}
                    />
                    <Square 
                        onClick={this.props.onClick} 
                        row={1}
                        column={1}
                        move={this.props.boardGame[1][1]}
                    />
                    <Square 
                        onClick={this.props.onClick} 
                        row={1}
                        column={2}
                        move={this.props.boardGame[1][2]}
                    />
                </View>
                
                <View style={styles.row}> 
                    <Square 
                        onClick={this.props.onClick} 
                        row={2}
                        column={0}
                        move={this.props.boardGame[2][0]}
                    />
                    <Square 
                        onClick={this.props.onClick} 
                        row={2}
                        column={1}
                        move={this.props.boardGame[2][1]}
                    />
                    <Square 
                        onClick={this.props.onClick} 
                        row={2}
                        column={2}
                        move={this.props.boardGame[2][2]}
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