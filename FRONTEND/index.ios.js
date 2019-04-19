import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  StatusBar
} from 'react-native';
import App from './src/components/App';
export default class FRONTEND extends Component {
  render() {
    return <App/ >;
  }
}

AppRegistry.registerComponent('FRONTEND', () => FRONTEND);
