import React, { Component } from 'react'
import {
  View, Text, TouchableOpacity, StyleSheet
  , TextInput, Alert
} from 'react-native'
import register from "../../api/register";


export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      rePassword:"",
    }
  }



  onSuccess() {
    Alert.alert(
      'Notice',
      'Sign up successfully',
      [
        {text: 'OK', onPress: this.props.gotoSignIn() }
      ],
      {cancelable: false},
    );
  }

  onFail() {
    Alert.alert(
      'Notice',
      'Email has been used by other',
      [
        {text: 'OK', onPress: this.removeEmail.bind(this)} //this.removeEmail.bind(this)
      ],
      {cancelable: false},
    );
  }
  
  removeEmail() {
    this.setState({ email:''});
  }

  removeAll() {
    this.setState({
      name: "",
      email: "",
      password: "",
      rePassword:"",
    })
  }
  clickRegister() {
    const { email, name, password } = this.state;
    register(email, name, password)
    .then((response)=>response.json())
    .then((responseJson) => {
      if (responseJson.result === "THANH_CONG") return this.onSuccess();
      else return this.onFail();
    });
  }

  render() {
    const { textInput, bigBtn, textBtn } = styles;

    return (
      <View>
        <TextInput
          style={textInput}
          underlineColorAndroid="white"
          placeholder="Enter your email"
          value={this.state.email}
          onChangeText={text => this.setState({ email: text })}
        />
        <TextInput
          style={textInput}
          underlineColorAndroid="white"
          placeholder="Enter your name"
          value={this.state.name}
          onChangeText={text => this.setState({ name: text })}
        /> 
        <TextInput
          style={textInput}
          secureTextEntry
          underlineColorAndroid="white"
          placeholder="Enter your password"
          value={this.state.password}
          onChangeText={text => this.setState({ password: text })}
        />
        <TextInput
          style={textInput}
          secureTextEntry
          underlineColorAndroid="white"
          placeholder="Re-enter your password"
          value={this.state.rePassword}
          onChangeText={text => this.setState({ rePassword: text })}
        />
        <TouchableOpacity
          style={bigBtn}
          onPress={this.clickRegister.bind(this)}
        >
          <Text style={textBtn}>Sign Up Now</Text>
        </TouchableOpacity>
      </View>
    )
  }
}


const styles = StyleSheet.create({
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
})