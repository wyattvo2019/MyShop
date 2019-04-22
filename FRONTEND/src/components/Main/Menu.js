import React, { Component } from 'react'
import { 
  View, 
  Text,
  TouchableOpacity, 
  StyleSheet,
  Image, 
} from 'react-native';

import global from "../global";

import profileIcon from './../../Media/temp/profile.png';

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
    //  isLogedIn: false,
      user:null,
    }
  }

  onSignIn(user) {
    this.setState({user: user})
  }

  clickLogOut() {
    this.setState({
      isLogedIn:false,
    })
    global.onSignIn = this.onSignIn.bind(this);
  }

  gotoAuthentication(){
    const {navigator} = this.props;
    navigator.push({name: 'AUTHENTICATION'})

  }

  gotoChangeInfo(){
    const {navigator} = this.props;
    navigator.push({name: 'CHANGE_INFO'})
  }

  gotoOrderHistory(){
    const {navigator} = this.props;
    navigator.push({name: 'ORDERHISTORY'})
  }
  
  render() {
    const { container, profile, btnStyle,
      btnText, btnSignInStyle, loginContainer, username
    } = styles;
    const { user } = this.state
    
    const logoutJSX = (
    <TouchableOpacity style={btnStyle}>
      <Text style={btnText} onPress={this.gotoAuthentication.bind(this)}>Sign In</Text>
    </TouchableOpacity>
    );
    
    const loginJSX = (
      <View style={loginContainer}>
          <Text style={username}>{user? user.name:""}</Text>
          <View>
            <TouchableOpacity style={btnSignInStyle} onPress={this.gotoOrderHistory.bind(this)}>
              <Text style={btnText}>Order History</Text>
            </TouchableOpacity>
            <TouchableOpacity style={btnSignInStyle} onPress={this.gotoChangeInfo.bind(this)}>
              <Text style={btnText}>Change Info</Text>
            </TouchableOpacity>
            <TouchableOpacity style={btnSignInStyle} onPress={this.clickLogOut.bind(this)}>
              <Text style={btnText}>Log out</Text>
            </TouchableOpacity>
          </View>
        </View>
    );

    const mainJSX = this.state.user ? loginJSX : logoutJSX;
    return(
      <View style={container}>
        <Image source={profileIcon} style={profile} />
        {mainJSX}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34B089',
    borderRightWidth: 3,
    borderColor: '#FFF',
    alignItems:'center',
  },
  profile: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginVertical:30,
  },
  btnStyle: {
    height: 50,
    borderRadius: 5,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal:60,
  },
  btnText: {
    color: '#34B089',
    fontSize:20,
  },
  btnSignInStyle: {
    height: 50,
    borderRadius: 5,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    width:200,
    marginBottom:10,
  },
  btnTextSignIn: {
    color: '#34B089',
    fontSize:10,
  },
  loginContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  username: {
    color: "#FFF",
    fontFamily: 'Avenir',
    fontSize: 20
  }
})