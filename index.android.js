/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import ButtonScreen from './src/button-screen';

export default class ButtonDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ButtonScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('ButtonDemo', () => ButtonDemo);
