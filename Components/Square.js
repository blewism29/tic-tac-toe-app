import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import PropTypes from 'prop-types';

const propTypes = {
    onClick: PropTypes.func.isRequired,
    row: PropTypes.number.isRequired,
    column: PropTypes.number.isRequired,
    disabled: PropTypes.bool.isRequired,
    mark: PropTypes.string.isRequired
};

class Square extends Component {
    render() {
        return (
            <View style={ styles.container }>
                <Button
                    disabled={this.props.disabled} 
                    style={ styles.button } 
                    title={ this.props.mark } 
                    onPress={ () => this.props.onClick( this.props.row, this.props.column ) } 
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
        height: 100
      },
      button: {
        width: 100,
        height: 200
      }
});

Square.propTypes = propTypes;

export default Square;
