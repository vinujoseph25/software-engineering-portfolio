import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';


export default class App extends Component {
  constructor(){
	  super();
	  this.state = {
		  name: ''
	  }
	}

	onChangeText(value){
	  this.setState({
		  name: value
	  })
	}

	render() {
	  return (
      <View style={styles.container}>
        <TextInput 
          style={{height: 40, width:120}} 
          placeholder='Enter Name' 
          value={this.state.name}
          onChangeText = {(value) => this.onChangeText(value)}
        />
        <Text style={styles.paragraph}>Hello {this.state.name}</Text>
      </View>
			);
		}
}

const styles = StyleSheet.create({
  container: {
    paddingTop:25,
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
