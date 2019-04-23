
import React, { Component } from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import Menu from './Menu';
import Shop from './Shop/Shop';
import Drawer from 'react-native-drawer';
import checkLogin from '../../api/checkLogin';
import getToken from "../../api/getToken";
import global from "../global";
import refreshToken from '../../api/refreshToken';

export default class Main extends Component {
  componentDidMount() {
    getToken()
      .then(token => checkLogin(token))
      .then(res => global.onSignIn(res.user))
      .catch(err => console.log(err));
    setInterval(() => {
      getToken()
      .then(token=>refreshToken());
    }, 60 * 1000);
  }

  // gotoAuthentication(){
  //   const {navigator} = this.props;
  //   navigator.push({name: 'AUTHENTICATION'})

  // }
  // gotoChangeInfo(){
  //   const {navigator} = this.props;
  //   navigator.push({name: 'CHANGE_INFO'})

  // }
  // gotoOrderHistory(){
  //   const {navigator} = this.props;
  //   navigator.push({name: 'ORDERHISTORY'})

  // }
  
  closeControlPanel = () => {
    this._drawer.close()
  };

  openControlPanel = () => {
    this._drawer.open()
  };


  render(){
    const {navigator} = this.props;
    return(
        <Drawer
          ref={(ref) => this._drawer = ref}
          tapToClose={true}
          openDrawerOffset={0.1}
          content={<Menu navigator={navigator} />}
        >
          <Shop open={this.openControlPanel.bind(this)} />
        </Drawer>

    );
  }
}

