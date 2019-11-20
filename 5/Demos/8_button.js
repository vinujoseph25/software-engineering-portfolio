import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native';


export default class App extends Component {
  constructor(){
	  super();
	  this.state = {
		  name: '',
		  password:''
	  }
	}



	render() {
	  return (
      <View style={styles.container}>
        <TextInput 
          style={{height: 40, width:120}} name="name"
          placeholder='Enter Name' 
          value={this.state.name} 
          onChangeText = {(name) => this.setState({name})}
        />
		<TextInput 
          style={{height: 40, width:120}} 
          placeholder='Enter Password' 
          value={this.state.password} secureTextEntry={true}
          onChangeText = {(password) => this.setState({password})}
        />
		
        <Button onPress = { ()=> {Alert.alert('Success!');}} title= 'Submit' />
           
	
      </View>
			);
		}
}

const styles = StyleSheet.create({
  container: {
    //paddingTop:5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  }
})
