import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';
import App from './src/components/App';

export default class FRONTEND extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <App />
      </View>
    );
  }
}

AppRegistry.registerComponent('FRONTEND', () => FRONTEND);
