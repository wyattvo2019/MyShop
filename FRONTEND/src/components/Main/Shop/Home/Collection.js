import React, { Component } from 'react'
import {
  View, Text, Image, StyleSheet,
  Dimensions, TouchableOpacity
} from 'react-native';
import bannerImage from '../../../../Media/temp/banner.jpg'



export default class Collection extends Component{
  
  render() {
    const { wrapper,imageStyle,textStyle } = styles;
    return(
      <View style={wrapper}>
        <View style={{ flex: 1, justifyContent:'center' }}>
         <Text style={textStyle}>SPRING COLLECTION</Text>
        </View>
        <View style={{ flex: 4 }}>
          <Image  source={bannerImage} style={imageStyle} />
        </View>
      </View>
    )
  }
}

const { width, height } = Dimensions.get('window');
const imageWidth = width - 40;
const imageHeight = (imageWidth / 933) * 465;
const styles = StyleSheet.create({
  wrapper: {
    height: height * 0.35,
    backgroundColor: 'white',
    margin: 10,
    marginBottom: 5,
    marginTop:5,
    shadowColor: '#2E272B',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    padding: 10,
    paddingTop: 0
  },
  textStyle: {
    fontSize: 20,
    color:'#AFAEAF',
  },
  imageStyle: {
    height: imageHeight,
    width: imageWidth,
  }
})