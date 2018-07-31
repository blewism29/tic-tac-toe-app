import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import PropTypes from 'prop-types';

const propTypes = {
    onClick: PropTypes.func.isRequired,
    row: PropTypes.number.isRequired,
    column: PropTypes.number.isRequired,
    move: PropTypes.number.isRequired
};

class Square extends Component {
 
    CONSTANTS = {
        PLAYER1_MOVE: 'X',
        PLAYER2_MOVE: 'O'
    };

    evaluatePosition () {
        return this.props.move == 1 || this.props.move == -1 ? true : false;
    }

    drawPosition () {
        switch (this.props.move) {
            case 1:
                return this.CONSTANTS.PLAYER1_MOVE;
            case -1:
                return this.CONSTANTS.PLAYER2_MOVE;
            default:
                return '';
        }
    }

    render () {
        return (
            <View style={styles.container}>
                <Button
                    style={styles.button} 
                    disabled={this.evaluatePosition()} 
                    title={this.drawPosition()} 
                    onPress={() => this.props.onClick(this.props.row, this.props.column)} 
                />
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        borderStyle: 'solid',
        borderColor: '#000000',
        borderWidth: 1,
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      },
      button: {
        width: 100,
        height: 100,
      }
});

Square.propTypes = propTypes;

export default Square;
