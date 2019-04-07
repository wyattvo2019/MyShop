import React, { Component } from 'react'
import { ScrollView, Text } from 'react-native';
import Collection from './Collection';
import Category from './Category';
import TopProduct from './TopProduct';
 
export default class HomeView extends Component{
  render(){
    return(
      <ScrollView style={{flex:1,backgroundColor:'#EEE'}}>
        <Collection navigator={this.props.navigator}/>
        <Category navigator={this.props.navigator} />
        <TopProduct navigator={this.props.navigator}/>
      </ScrollView>
    )
  }
}