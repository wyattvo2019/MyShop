import React, { Component } from 'react'
import { 
  View, 
  Text,
  TouchableOpacity, 
} from 'react-native';

export default class Menu extends Component {

  gotoAuthentication(){
    const {navigator} = this.props;
    navigator.push({name: 'AUTHENTICATION'})

  }
  gotoChangeInfo(){
    const {navigator} = this.props;
    navigator.push({name: 'CHANGE_INFO'})

  }
  gotoOrderHistory(){
    const {navigator} = this.props;
    navigator.push({name: 'ORDERHISTORY'})

  }
  render(){
    return(
      <View style={{flex:1, backgroundColor:'#86F4EE'}}>
        <Text>Component Menu</Text>
        <TouchableOpacity onPress={this.gotoAuthentication.bind(this)}>
          <Text>GO TO Auth </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.gotoChangeInfo.bind(this)}>
          <Text>GO TO ChangeIn</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.gotoOrderHistory.bind(this)}>
          <Text>GO TO Order</Text>
        </TouchableOpacity>
      </View>
    );
  }
}