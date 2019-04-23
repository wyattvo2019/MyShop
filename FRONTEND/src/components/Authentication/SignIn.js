import React, { Component } from 'react'
import {
  View, Text, TouchableOpacity, Image, StyleSheet,
  TextInput,
} from 'react-native'
import signIn from "../../api/signIn";
import global from "../global";
import saveToken from "../../api/getToken";
import getToken from "../../api/getToken";


export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  componentDidMount() {
    getToken()
      .then(a => console.log('TOKEN::::'+a));
  }

  onSignIn() {
    const { email, password } = this.state;
    signIn(email, password)
      .then(res =>{
        global.onSignIn(res.user);
        this.props.goBackToMain();
        saveToken(res.token);
      }
      )
    .catch(err => console.log(err));
  }

  render() {
    const { textInput, bigBtn, textBtn } = styles;
    const { email, password } = this.state;
    return (
      <View>

        <TextInput
          style={textInput}
          underlineColorAndroid="white"
          placeholder="Email"
          value={email}
          onChangeText={text => this.setState({email:text})}
        />

        <TextInput
          style={textInput}
          underlineColorAndroid="white"
          placeholder="Password"
          value={password}
          secureTextEntry
          onChangeText={text => this.setState({password:text})}
        />

        <TouchableOpacity
          style={bigBtn}
          onPress={this.onSignIn.bind(this)}>
          <Text style={textBtn}>Sign In Now</Text>
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
