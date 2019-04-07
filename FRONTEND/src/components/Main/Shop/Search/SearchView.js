import React, { Component } from 'react'
import {
  View, Text, TouchableOpacity, Navigator
} from 'react-native';

export default class SearchView extends Component{
  gotoDetail() {
    const { navigator } = this.props;
    navigator.push({ name: 'PRODUCT_DETAIL' });
  }
  render(){
    return(
      <View style={{flex:1,backgroundColor:'#5783CC'}}>
        <Text>SearchView</Text>
        <TouchableOpacity onPress={this.gotoDetail.bind(this)}>
          <Text>Go to productdetail</Text>
        </TouchableOpacity>
      </View>
    )
  }
}