import React, { Component } from 'react'
import { 
  View, 
  Text, 
  TouchableOpacity,
  Dimensions, 
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Home from './Home/Home';
import Cart from './Cart/Cart';
import Search from './Search/Search';
import Contact from './Contact/Contact';
import Header from './Header';

export default class Shop extends Component {
  constructor(props){
    super(props);
    this.state = {selectedTab: 'home'};
  }

  openMenu(){
    const {open} = this.props;
    open();
  }

  render(){
    return(
      <View style={{flex:1, backgroundColor:'#86AAEE'}}>

        <Header onOpen={this.openMenu.bind(this)} />
        <TabNavigator>

          <TabNavigator.Item
            selected={this.state.selectedTab === 'home'}
            title="HOME"
            // renderIcon={() => <Image source={...} />}
            // renderSelectedIcon={() => <Image source={...} />}
            // badgeText="1"
            onPress={() => this.setState({ selectedTab: 'home' })}>
            <Home />
          </TabNavigator.Item>

          <TabNavigator.Item
            selected={this.state.selectedTab === 'cart'}
            title="CART"
            // renderIcon={() => <Image source={...} />}
            // renderSelectedIcon={() => <Image source={...} />}
            // renderBadge={() => <CustomBadgeView />}
            onPress={() => this.setState({ selectedTab: 'cart' })}>
            <Cart />
          </TabNavigator.Item>

          <TabNavigator.Item
            selected={this.state.selectedTab === 'search'}
            title="SEARCH"
            // renderIcon={() => <Image source={...} />}
            // renderSelectedIcon={() => <Image source={...} />}
            // badgeText="1"
            onPress={() => this.setState({ selectedTab: 'search' })}>
            <Search />
          </TabNavigator.Item>

          <TabNavigator.Item
            selected={this.state.selectedTab === 'contact'}
            title="CONTACT"
            // renderIcon={() => <Image source={...} />}
            // renderSelectedIcon={() => <Image source={...} />}
            // badgeText="1"
            onPress={() => this.setState({ selectedTab: 'contact' })}>
            <Contact />
          </TabNavigator.Item>

        </TabNavigator>

      </View>
    );
  }
}