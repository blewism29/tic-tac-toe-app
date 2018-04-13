import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

const propTypes = {
  playerName: PropTypes.string.isRequired
};

class Turn extends Component {

  render() {
    return (
      <View> 
        <Text> { this.props.playerName } </Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: 'center'
  }
});

Turn.propTypes = propTypes;

export default Turn;
