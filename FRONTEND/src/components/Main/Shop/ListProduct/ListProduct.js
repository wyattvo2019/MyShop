import React, { Component } from 'react';

import { 
  Text, View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions
} from 'react-native';

import backList from '../../../../Media/appIcon/backList.png';
import sp1 from '../../../../Media/temp/sp1.jpeg';


export default class ListProduct extends Component {

  goBack() {
    const { navigator } = this.props;
    navigator.pop();
  }

  gotoDetail(product) {
    const { navigator } = this.props;
    navigator.push({name: 'PRODUCT_DETAIL', product})
  }

  render() {

    const { container, wrapper, header, backStyle,
      titleStyle, productContainer,
      productInfo, lastRowInfo, productImage,
      txtName, txtMaterial, txtPrice, txtShowDetail
    } = styles;

    return (
      <View style={container}>
        <ScrollView style={wrapper}>
          
          <View style={header}>
            <TouchableOpacity onPress={this.goBack.bind(this)}>
              <Image source={backList} style={backStyle} />
            </TouchableOpacity>
            <Text style={titleStyle}>Party Dress</Text>
            <View style={{width:30}}/>
          </View>

          <TouchableOpacity style={productContainer} onPress={this.gotoDetail.bind(this)}>
            <Image style={productImage} source={sp1}/>
            <View style={productInfo}>
              <Text style={txtName}>Lace Sleeve Si</Text>
              <Text style={txtMaterial}>Chat lieu</Text>
              <Text style={txtPrice}>117$</Text>
              <View style={lastRowInfo}>
                <Text>ColorRoyal Blue</Text>
                <View style={{backgroundColor:'cyan', height:16, width:16, borderRadius:8}} />
                <TouchableOpacity>
                  <Text>Show detail</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={productContainer} onPress={this.gotoDetail.bind(this)}>
            <Image style={productImage} source={sp1}/>
            <View style={productInfo}>
              <Text style={txtName}>Lace Sleeve Si</Text>
              <Text style={txtMaterial}>Chat lieu</Text>
              <Text style={txtPrice}>117$</Text>
              <View style={lastRowInfo}>
                <Text>ColorRoyal Blue</Text>
                <View style={{backgroundColor:'cyan', height:16, width:16, borderRadius:8}} />
                <TouchableOpacity>
                  <Text>Show detail</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>


          <TouchableOpacity style={productContainer} onPress={this.gotoDetail.bind(this)}>
            <Image style={productImage} source={sp1}/>
            <View style={productInfo}>
              <Text style={txtName}>Lace Sleeve Si</Text>
              <Text style={txtMaterial}>Chat lieu</Text>
              <Text style={txtPrice}>117$</Text>
              <View style={lastRowInfo}>
                <Text>ColorRoyal Blue</Text>
                <View style={{backgroundColor:'cyan', height:16, width:16, borderRadius:8}} />
                <TouchableOpacity>
                  <Text>Show detail</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={productContainer} onPress={this.gotoDetail.bind(this)}>
            <Image style={productImage} source={sp1}/>
            <View style={productInfo}>
              <Text style={txtName}>Lace Sleeve Si</Text>
              <Text style={txtMaterial}>Chat lieu</Text>
              <Text style={txtPrice}>117$</Text>
              <View style={lastRowInfo}>
                <Text>ColorRoyal Blue</Text>
                <View style={{backgroundColor:'cyan', height:16, width:16, borderRadius:8}} />
                <TouchableOpacity>
                  <Text>Show detail</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>

        </ScrollView>    
      </View>
    );
  }
}


const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#DBDBD8',
    margin:5,
  },
  header: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    alignItems:'center',
  },
  wrapper: {
    backgroundColor: '#FFF',
    borderColor: '#AAA',
    borderWidth: 2,
    shadowColor: '#2E272B',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    paddingHorizontal:10,
  },
  backStyle: {
    width: width /10,
    height:width /10,
  },
  titleStyle: {
    fontFamily: 'Avenir',
    fontSize: 25,
    color:'#B10D65',
  },
  productContainer: {
    flexDirection: 'row',
    borderTopColor: '#D6D6D6',
    borderBottomColor: '#FFF',
    borderLeftColor: '#FFF',
    borderRightColor: '#FFF',
    borderWidth: 1,
  },
  productInfo: {
    justifyContent: 'space-between',
    marginLeft: 15,
    flex:1,
  },
  lastRowInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
  },
  productImage:{
    width: 80,
    height: (80 * 452) / 361,
  },
  txtName: {
    fontFamily: 'Avenir',
    color: '#BCBCBC',
    fontSize: 20,
    fontWeight:'400',
  },
  txtMaterial: {
    fontFamily: 'Avenir',
  },
  txtPrice: {
    fontFamily: 'Avenir',
  },
  txtShowDetail: {
    fontFamily: 'Avenir',
    color: '#B10D65',
    fontSize:13,
  }


})