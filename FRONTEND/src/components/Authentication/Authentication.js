import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, Image, StyleSheet,
  Dimensions
} from 'react-native';
import icBack from './../../Media/appIcon/back.png';
import icLogo from './../../Media/appIcon/ic_logo.png';
export default class Authentication extends Component {

  gobacktoMain(){
    const {navigator} = this.props;
    navigator.pop();
  }

  render() {
    const {
      wrapper,
      row1,
      textInput,
      iconStyle,
      titleStyle,
      signinStyle,
      signupStyle,
      controlStyle
    } = styles;
    return(
      <View style={{flex:1,backgroundColor:"#3EBA77"}}>
        <View style={styles.row1}>
            <TouchableOpacity onPress={this.props.onOpen}>
              <Image source={icBack} style={iconStyle}/>
            </TouchableOpacity>
            <Text style={titleStyle}>Wearing a Dress</Text>
            <Image source={icLogo} style={iconStyle}/>
        </View>
        <View>

        </View>
        <View >
          <TouchableOpacity >
            <Text style={signinStyle}>SignIn</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={signupStyle}>SignUp</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const {height} = Dimensions.get('window'); 
const styles = StyleSheet.create({
  wrapper: {
    flex:1,
    backgroundColor: '#34B089',
    padding: 20,
    justifyContent: 'space-between',
  },
  row1:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput:{
   height: height/15, backgroundColor: 'white', paddingLeft:5, 
  },
  iconStyle:{
    height: 30,
    width: 30,
  },
  titleStyle:{
    color: '#FFF', fontSize:25,
  },
  controlStyle: {
    flexDirection: 'row',
    width: 300,
  },
  signinStyle: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
  },
  signupStyle: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
  },
})
