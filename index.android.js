import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class CardView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.bodyContainerOne}>
          <Text style={{fontWeight:'bold', fontSize:20, color:'white'}}>Card View</Text>
        </View>
        <View style={styles.bodyContainerTwo}>
        	<View style={styles.inBody}>
        	  <View style={styles.cssInBodyOne}>
        		<Image style={styles.imageOne}
          			source={require('./img/Rn.png')}
          		/>
          		<Text style={{marginTop:15, fontSize:20, color:'black'}}>
          			React Native {'\n'}
          			September 14, 2016
          		</Text>
          	  </View>

          	  <View style={styles.cssInBodyTwo}>
          	  	<Image style={styles.imageTwo}
          			source={require('./img/Rn.png')}
          		/>
          		<Text style={{marginLeft:5, marginBottom:50, fontSize:15, color:'black'}}>
          		    React Native combines smoothly with components 
          			written in Objective-C, Java, or Swift. 
          			It's simple to drop down to native code if you need to optimize a few aspects of your application. It's 
          			also easy to build part of your app in React Native, and part of your app using native code 
          			directly - that's how the Facebook app works.
          		</Text>
          		<Text style={{margin:5, fontSize:15, color:'black'}}>
          		  <Image style={styles.imageThree}
          		   	source={require('./img/Rn.png')}
          		  />
          			1.000 star
          		</Text>
          	  </View>
        	</View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#ECEFF1',
  },
  bodyContainerOne:{
    flex:1,
    backgroundColor:'#4DB6AC',
    justifyContent:'center',
    alignItems:'center',
  },
  bodyContainerTwo:{
    flex:10,
    backgroundColor:'#004D40',
  },
  inBody:{
  	height:400,
  	backgroundColor:'#E0E0E0',
  	marginTop:20,
  	marginLeft:10,
  	marginRight:10,
  	borderRadius:5,  
  },
  
  imageOne:{
  	width:70,
  	height:70,
  	marginLeft:5,
  	marginTop:10,
  	marginRight:15,
  	borderRadius:100
  },
  imageTwo:{
  	width:330,
  	height:100,
  	marginLeft:5,
  	marginRight:15,
  },
  imageThree:{
  	width:50,
  	height:50,
  	marginLeft:5,
  	paddingRight:10,
  	marginRight:10
  },

  cssInBodyOne:{
  	flex:1,
  	flexDirection:'row'
  },
  cssInBodyTwo:{
  	flex:3.5,
  },
});
AppRegistry.registerComponent('CardView', () => CardView);

