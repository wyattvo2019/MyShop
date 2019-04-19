import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, Image, StyleSheet,
  Dimensions, TextInput, 
} from 'react-native';
import icBack from './../../Media/appIcon/back_white.png';
import icLogo from './../../Media/appIcon/ic_logo.png';
export default class Authentication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignIn:true,
    }
  }
  signInTab() {
    this.setState({
      isSignIn: true
    })
  }
  signUpTab() {
    this.setState({
      isSignIn: false
    })
  }

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
      controlStyle,
      btnText,
      btnTextSelected,
      bigBtn,
      textBtn
    } = styles;
    const signInJSX = (
        <View>
            <TextInput style={textInput} underlineColorAndroid="white" placeholder="Email"/>
            <TextInput style={textInput} underlineColorAndroid="white" placeholder="Password" />
            <TouchableOpacity  style={bigBtn}>
              <Text style={textBtn}>Sign In Now</Text>
            </TouchableOpacity>
        </View>

        
    );
    
    const signUpJSX = (
      <View>
          <TextInput style={textInput} underlineColorAndroid="white" placeholder="Enter your name" />
          <TextInput style={textInput} underlineColorAndroid="white" placeholder="Enter your email"/>
          <TextInput style={textInput}  underlineColorAndroid="white" placeholder="Enter your password" />
          <TextInput style={textInput} underlineColorAndroid="white" placeholder="Re-enter your password" />
          <TouchableOpacity  style={bigBtn}>
            <Text style={textBtn}>Sign Up Now</Text>
          </TouchableOpacity>
      </View>
    );

    const signInBtnJSX = (
      <View style={controlStyle}>
            <TouchableOpacity style={signinStyle}>
              <Text style={btnTextSelected}>SIGN IN</Text>
            </TouchableOpacity >
            <TouchableOpacity style={signupStyle} onPress={this.signUpTab.bind(this)}>
              <Text style={btnText}>SIGN UP</Text>
            </TouchableOpacity>
        </View>
    );
    const signUpBtnJSX = (
      <View style={controlStyle}>
        <TouchableOpacity style={signinStyle} onPress={this.signInTab.bind(this)}>
          <Text style={btnText}>SIGN IN</Text>
        </TouchableOpacity >
        <TouchableOpacity style={signupStyle}>
          <Text style={btnTextSelected}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    );
    const mainJSX = this.state.isSignIn ? signInJSX : signUpJSX;
    const mainBtnJSX = this.state.isSignIn ? signInBtnJSX : signUpBtnJSX;
    return(
      <View style={wrapper}>
        <View style={styles.row1}>
            <TouchableOpacity onPress={this.gobacktoMain.bind(this)}>
              <Image source={icBack} style={iconStyle}/>
            </TouchableOpacity>
            <Text style={titleStyle}>Wearing a Dress</Text>
            <Image source={icLogo} style={iconStyle}/>
        </View>


        {this.state.isSignIn ? signInJSX : signUpJSX}
        {this.state.isSignIn ? signInBtnJSX : signUpBtnJSX}

        
      </View>
    );
  }
}
const {height, width} = Dimensions.get('window'); 
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
    height: 50,
    backgroundColor: 'white',
    marginBottom: 10,
    borderRadius: 10,
    paddingLeft:20,
  },
  bigBtn:{
    height: 50,
    backgroundColor: '#34B089',
    borderWidth: 1,
    borderColor:'#FFF',
    borderRadius: 10,
    paddingLeft: 20,
    justifyContent: 'center',
    alignItems:'center',
    
  },
  textBtn: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  iconStyle:{
    height: 30,
    width: 30,
  },
  titleStyle:{
    color: '#FFF',
    fontSize: 25,
    fontFamily: 'Avenir',
  },
  controlStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  signinStyle: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    paddingVertical: 20,
    justifyContent: 'center',
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    marginRight:1,
  },
  signupStyle: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    paddingVertical: 20,
    justifyContent: 'center',
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    marginLeft:1,
  },
  btnTextSelected: {
    fontWeight: 'bold',
    color:  '#34B089',
  },
  btnText: {
    color:  '#EEE',
  }
})
