import React, { Component } from 'react'
import { 
  View, 
  Text, 
  TouchableOpacity,
  Dimensions, 
  Image,
  StyleSheet
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Home from './Home/Home';
import Cart from './Cart/Cart';
import Search from './Search/Search';
import Contact from './Contact/Contact';
import Header from './Header';
import initData from '../../../api/initData';
import saveCart from '../../../api/saveCart';
import getCart from '../../../api/getCart';


import homeIconS from '../../../Media/appIcon/home.png';
import homeIcon from '../../../Media/appIcon/home0.png';
import cartIconS from '../../../Media/appIcon/cart.png';
import cartIcon from '../../../Media/appIcon/cart0.png';
import searchIconS from '../../../Media/appIcon/search.png';
import searchIcon from '../../../Media/appIcon/search0.png';
import contactIconS from '../../../Media/appIcon/contact.png';
import contactIcon from '../../../Media/appIcon/contact0.png';

export default class Shop extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedTab: 'home',
      types: [], 
      topProducts: [],
      cartArray: [],
    };
    global.addProductToCart = this.addProductToCart.bind(this);
  }

  addProductToCart(product) {
    this.setState({ cartArray: this.state.cartArray.concat({product, quatity: 1}) });
    saveCart(this.state.cartArray);
  }

  componentDidMount() {
    initData()
    .then(resJSON => {
      const { type, product } = resJSON;
      this.setState({
        types: type,
        topProducts: product,
      });
    });
    getCart()
    .then(cartArray => this.setState({cartArray}));
  }

  openMenu(){
    const {open} = this.props;
    open();
  }

  render() {
    const { iconStyle } = styles;
    const { types,topProducts, cartArray } = this.state;
    return(
      <View style={{flex:1, backgroundColor:'#86AAEE'}}>

        <Header onOpen={this.openMenu.bind(this)} />
        <TabNavigator>

          <TabNavigator.Item
            selected={this.state.selectedTab === 'home'}
            title="HOME"
            renderIcon={() => <Image source={homeIcon} style={styles.iconStyle}/>}
            renderSelectedIcon={() => <Image source={homeIconS} style={styles.iconStyle} />}
            // badgeText="1"
            onPress={() => this.setState({ selectedTab: 'home' })}
            selectedTitleStyle={{color: '#34B089'}}
          >
            <Home types={types} topProducts={topProducts}/>
          </TabNavigator.Item>

          <TabNavigator.Item
            selected={this.state.selectedTab === 'cart'}
            title="CART"
            renderIcon={() => <Image source={cartIcon} style={styles.iconStyle}/>}
            renderSelectedIcon={() => <Image source={cartIconS} style={styles.iconStyle} />}
            badgeText={cartArray.length}
            onPress={() => this.setState({ selectedTab: 'cart' })}
            selectedTitleStyle={{color: '#34B089'}}
          >
            <Cart cartArray={cartArray}/>
          </TabNavigator.Item>

          <TabNavigator.Item
            selected={this.state.selectedTab === 'search'}
            title="SEARCH"
            renderIcon={() => <Image source={searchIcon} style={styles.iconStyle}/>}
            renderSelectedIcon={() => <Image source={searchIconS} style={styles.iconStyle} />}
            // badgeText="1"
            onPress={() => this.setState({ selectedTab: 'search' })}
            selectedTitleStyle={{color: '#34B089'}}
          >
            <Search />
          </TabNavigator.Item>

          <TabNavigator.Item
            selected={this.state.selectedTab === 'contact'}
            title="CONTACT"
            renderIcon={() => <Image source={contactIcon} style={styles.iconStyle}/>}
            renderSelectedIcon={() => <Image source={contactIconS} style={styles.iconStyle} />}
            // badgeText="1"
            onPress={() => this.setState({ selectedTab: 'contact' })}
            selectedTitleStyle={{color: '#34B089'}}
          >
            <Contact />
          </TabNavigator.Item>

        </TabNavigator>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  iconStyle: {
    width:20, height:20,
  }
})