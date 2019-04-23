
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
      .catch(err => console.log('LOI CHECK LOGIN', err));
  }

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
          openDrawerOffset={0.2}
          content={<Menu navigator={navigator} />}
        >
          <Shop open={this.openControlPanel.bind(this)} />
        </Drawer>

    );
  }
}

