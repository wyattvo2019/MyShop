
import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class OrderHistory extends Component {
  gobacktoMain(){
    const {navigator} = this.props;
    navigator.pop();
  }
  render(){
    return(
      <View style={{flex:1,backgroundColor:"orange"}}>
        <Text>OrderHistory Page</Text>
        <TouchableOpacity onPress={this.gobacktoMain.bind(this)}>
          <Text>Go to Main</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

