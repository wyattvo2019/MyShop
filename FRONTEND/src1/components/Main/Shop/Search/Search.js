import React, { Component } from 'react'
import { View, Text, Navigator } from 'react-native';
import ProductDetail from '../ProductDetail/ProductDetail';
import SearchView from './SearchView'
export default class Search extends Component{
  render(){
    return(
      <Navigator
        initialRoute={{ name: 'SEARCH_VIEW' }}
        renderScene={(route, navigator) => {
          switch(route.name){
            case 'SEARCH_VIEW': return <SearchView navigator={navigator} />;
            default: return <ProductDetail navigator={navigator}/>;
          }
        }}
      />
    )
  }
}