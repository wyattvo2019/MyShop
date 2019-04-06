import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';


import sp1 from '../../../../Media/temp/sp1.jpeg';
import sp2 from '../../../../Media/temp/sp2.jpeg';
import sp3 from '../../../../Media/temp/sp3.jpeg';
import sp4 from '../../../../Media/temp/sp4.jpeg';

export default class TopProduct extends Component{
  render() {
    const {
      container, titleContainer, title,
      body, productContainer, productImage,
      productName, productPrice,
    } = styles;
    return (
      <View style={container}>
        <View style={titleContainer}> 
          <Text style={title}>Top Product</Text>
        </View>
        <View style={body}>
          <View style={productContainer}>
            <Image source={sp1} style={productImage} />
            <Text style={productName}>Name</Text>
            <Text style={productPrice}>400$</Text>
          </View>
          <View style={productContainer}>
            <Image source={sp2} style={productImage} />
            <Text style={productName}>...</Text>
            <Text style={productPrice}>...</Text>
          </View>
          <View style={{height:10,width:width}}></View>
          <View style={productContainer}>
            <Image source={sp3} style={productImage} />
            <Text style={productName}>...</Text>
            <Text style={productPrice}>...</Text>
          </View>
          <View style={productContainer}>
            <Image source={sp4} style={productImage} />
            <Text style={productName}>...</Text>
            <Text style={productPrice}>...</Text>
          </View>
        </View>
      </View>
    )
  }
}


const { width,height } = Dimensions.get('window');
const productWidth = (width -50) * 0.5;
const productImageHeight = (productWidth / 361) * 452;

const styles = StyleSheet.create({
  container: {
    margin:10,
    backgroundColor: '#FFF', 
    shadowColor: '#2E272B',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
  },
  titleContainer: {
    height: 50,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  title:{
    fontSize: 20,
    color:'#D3D3D3',
  },
  body: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap:'wrap',
    paddingBottom:10,
  },
  productContainer: {
    width: productWidth,
  },
  productImage: {
    width: productWidth,
    height: productImageHeight,
  },
  productName: {
    paddingLeft: 10,
    fontFamily: 'Avenir',
    color: '#D3D3D3',
    fontWeight:'500',
  },
  productPrice: {
    paddingLeft: 10,
    fontFamily: 'Avenir',
    color:'#662F90',
  }

})