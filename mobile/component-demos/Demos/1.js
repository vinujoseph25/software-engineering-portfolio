import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class App extends React.Component {

  render() {
 
   return <View style={content.position}>                   
<Text   style = {{ fontSize: 20, backgroundColor: 'yellow', color:'blue' }} >element1</Text>
<Text style={content.red}>element2</Text>
          </View>
          }

}


const content = StyleSheet.create({
 red:{
   color:'red',
   textAlign:'center'
	
  },

position:{
paddingTop:80
}
});