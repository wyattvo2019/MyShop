import React, { Component } from 'react'
import { 
  View, 
  Text,
  TouchableOpacity, 
  StyleSheet,
  Image, 
} from 'react-native';

import global from "../global";
import saveToken from "../../api/saveToken";
import profileIcon from './../../Media/temp/profile.png';
// import getToken from '../../api/getToken';

export default class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = { user: null};
    global.onSignIn = this.onSignIn.bind(this);
  }

  onSignIn(user) {
    this.setState({ user});
  }

  onSignOut() {
    this.setState({ user:null });
    saveToken('');
  }

  gotoAuthentication(){
    const {navigator} = this.props;
    navigator.push({ name: 'AUTHENTICATION' });
  }

  gotoChangeInfo(){
    const {navigator} = this.props;
    navigator.push({name: 'CHANGE_INFO', user: this.state.user})
  }

  gotoOrderHistory(){
    const {navigator} = this.props;
    navigator.push({name: 'ORDERHISTORY'})
  }
  
  render() {
    const { container, profile, btnStyle,
      btnText, btnSignInStyle, loginContainer, username
    } = styles;

    const { user } = this.state;
    
    const logoutJSX = (
    <TouchableOpacity style={btnStyle} onPress={this.gotoAuthentication.bind(this)}>
      <Text style={btnText} >Sign In</Text>
    </TouchableOpacity>
    );
    
    const loginJSX = (
      <View style={loginContainer}>
          <Text style={username}>{user ? user.name : ""}</Text>
          <View>
            <TouchableOpacity style={btnSignInStyle} onPress={this.gotoOrderHistory.bind(this)}>
              <Text style={btnText}>Order History</Text>
            </TouchableOpacity>
            <TouchableOpacity style={btnSignInStyle} onPress={this.gotoChangeInfo.bind(this)}>
              <Text style={btnText}>Change Info</Text>
            </TouchableOpacity>
            <TouchableOpacity style={btnSignInStyle} onPress={this.onSignOut.bind(this)}>
              <Text style={btnText}>Log out</Text>
            </TouchableOpacity>
          </View>
          <View/> 
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
    width: 120,
    height: 120,
    borderRadius: 60,
    marginVertical:30,
  },
  btnStyle: {
    height: 50,
    borderRadius: 5,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal:70,
  },
  btnText: {
    color: '#34B089',
    fontSize: 20,
    fontFamily:"Avenir",
  },
  btnSignInStyle: {
    height: 50,
    borderRadius: 5,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    //alignItems: 'center',
    width:200,
    marginBottom: 10,
    paddingLeft:10,
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
    fontSize: 15
  }
})