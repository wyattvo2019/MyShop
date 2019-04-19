import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  ListView,
} from 'react-native';
import Constant from "../../../DatabaseConfig";
const url = "http://"+Constant.SERVER_IP+"/MyShop/api/images/product/";


export default class TopProduct extends Component{
  // constructor(props) {
  //   super(props);
  //   const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  //   const { topProducts } = this.props;
  //   this.state = {
  //     dataSource: ds.cloneWithRows(topProducts)
  //   }
  // }
  
  gotoDetail(product) {
    const { navigator } = this.props;
    navigator.push({ name: 'PRODUCT_DETAIL', product });
  }
  
  
  render() {

    const {
      container, titleContainer, title,
      body, productContainer, productImage,
      productName, productPrice,
    } = styles;
    const { topProducts } = this.props;
    return (
      <View style={container}>
        <View style={titleContainer}> 
          <Text style={title}>Top Product</Text>
        </View>

        
        <ListView
          contentContainerStyle={body}
          enableEmptySections
          dataSource={new ListView.DataSource({rowHasChanged: (r1,r2)=> r1!==r2 }).cloneWithRows(topProducts)}
          renderRow={product => (
              <TouchableOpacity
                style={productContainer}
                onPress={() => this.gotoDetail(product)}
                key={product.id}
              >
                <Image source={{uri: `${url}${product.images[0]}`}} style={productImage} />
                <Text style={productName}>{product.name.toUpperCase()}</Text>
                <Text style={productPrice}>{product.price} $</Text>
              </TouchableOpacity>
          )}
        />
      </View>
    )
  }
}


const { width,height } = Dimensions.get('window');
const productWidth = (width -50) * 0.5;
const productImageHeight = (productWidth / 361) * 452;

const styles = StyleSheet.create({
  container: {
    margin:10,
    backgroundColor: '#FFF', 
    shadowColor: '#2E272B',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
  },
  titleContainer: {
    height: 50,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  title:{
    fontSize: 20,
    color:'#D3D3D3',
  },
  body: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap:'wrap',
    paddingBottom:10,
  },
  productContainer: {
    width: productWidth,
  },
  productImage: {
    width: productWidth,
    height: productImageHeight,
  },
  productName: {
    paddingLeft: 10,
    fontFamily: 'Avenir',
    color: '#D3D3D3',
    fontWeight:'500',
  },
  productPrice: {
    paddingLeft: 10,
    fontFamily: 'Avenir',
    color:'#662F90',
  }

})


// <TouchableOpacity style={productContainer} onPress={this.gotoDetail.bind(this)}>
//             <Image source={sp1} style={productImage} />
//             <Text style={productName}>Name</Text>
//             <Text style={productPrice}>400$</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={productContainer} onPress={this.gotoDetail.bind(this)}>
//             <Image source={sp2} style={productImage} />
//             <Text style={productName}>...</Text>
//             <Text style={productPrice}>...</Text>
//           </TouchableOpacity>
//           <View style={{height:10,width:width}}></View>
//           <TouchableOpacity style={productContainer} onPress={this.gotoDetail.bind(this)}>
//             <Image source={sp3} style={productImage} />
//             <Text style={productName}>...</Text>
//             <Text style={productPrice}>...</Text>
//           </TouchableOpacity>
  



        // <View style={body}>
        //   {this.props.topProducts.map(e => (
        //     <TouchableOpacity
        //       style={productContainer}
        //       onPress={() => this.gotoDetail(e)}
        //       key={e.id}
        //     >
        //       <Image source={{uri: `${url}${e.images[0]}`}} style={productImage} />
        //       <Text style={productName}>{e.name.toUpperCase()}</Text>
        //       <Text style={productPrice}>{e.price} $</Text>
        //     </TouchableOpacity>
        //   ))}
        // </View>