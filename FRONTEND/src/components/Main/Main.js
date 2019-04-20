
import React, { Component } from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import Menu from './Menu';
import Shop from './Shop/Shop';
import Drawer from 'react-native-drawer';

export default class Main extends Component {
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
  
  closeControlPanel = () => {
    this._drawer.close()
  };

  openControlPanel = () => {
    this._drawer.open()
  };

  // componentDidMount() {
  //   this._drawer.open()
  // }
  render(){
    const {navigator} = this.props;
    return(
        <Drawer
          ref={(ref) => this._drawer = ref}
          tapToClose={true}
          openDrawerOffset={0.5}
          content={<Menu navigator={navigator} />}
        >
          <Shop open={this.openControlPanel.bind(this)} />
        </Drawer>

    );
  }
}

