import React, { Component } from 'react'
import { 
  View, 
  Text, 
  TouchableOpacity, 
  Dimensions ,
  Image,
  TextInput,
  StyleSheet
} from 'react-native';

import icLogo from '../../../Media/appIcon/ic_logo.png';
import icMenu from '../../../Media/appIcon/ic_menu.png';

const {height} = Dimensions.get('window'); 


export default class Header extends Component{
   render(){
     return(
      <View style={styles.wrapper} >
        <View style={styles.row1}>
            <TouchableOpacity onPress={this.props.onOpen}>
              <Image source={icMenu} style={styles.iconStyle}/>
            </TouchableOpacity>
            <Text style={styles.titleStyle}>Wearing a Dress</Text>
            <Image source={icLogo} style={styles.iconStyle}/>
          </View>
          <TextInput style={styles.textInput} placeholder="What do you want to buy?" underlineColorAndroid="white"/>
     </View>
     );
   }
 }

 const styles = StyleSheet.create({
   wrapper:{
    height: height / 7, backgroundColor: '#34B089', padding:10, justifyContent:'space-around'
   },
   row1:{
    flexDirection:'row', justifyContent:'space-between',
   },
   textInput:{
    height: height/15, backgroundColor: 'white', paddingLeft:5, 
   },
   iconStyle:{
     height:30, width:30,
   },
   titleStyle:{
     color: '#FFF', fontSize:25,
   }
 })

//  <TouchableOpacity onPress={this.props.onOpen}>
//           <Text>TopBar</Text>
// </TouchableOpacity>