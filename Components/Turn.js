import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Turn extends Component {
  
  render() {
    return (
        <View> 
            <Text> { this.props.playerName } </Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: 'center'
  }
})

