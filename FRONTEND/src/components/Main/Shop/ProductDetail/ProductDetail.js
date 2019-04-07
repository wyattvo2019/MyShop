import React, { Component } from 'react';
import { 
  Text, View,
  TouchableOpacity
} from 'react-native';

export default class ProductDetail extends Component {
  goBack() {
    const { navigator } = this.props;
    navigator.pop();
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#F2F2F2' }}>
        <TouchableOpacity onPress={this.goBack.bind(this)}>
          <Text>Back</Text>
        </TouchableOpacity>
        <Text>ProductDetail</Text>
      </View>
    );
  }
}