import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TouchableHighlight, TouchableOpacity, Alert } from 'react-native';
import { Constants } from 'expo';

export default class App extends Component {
  onPressButton() {
		Alert.alert('You tapped the button!')
	}

	onLongPressButton() {
		Alert.alert('You long-pressed the button!')
	}

  render() {
		return (
		  <View style={styles.container}>
			<Button
			  onPress={this.onPressButton}
			  title="Tap "
			  color="#841584"
			/>
			<TouchableHighlight 
			  onPress={this.onPressButton} 
			  underlayColor="white">
			  <View style={styles.button}>
				<Text style={styles.buttonText}>TouchableHighlight</Text>
			  </View>
			</TouchableHighlight>

			<TouchableOpacity 
			  onPress={this.onPressButton}>
			  <View style={styles.button}>
				<Text style={styles.buttonText}>TouchableOpacity</Text>
			  </View>
			</TouchableOpacity>

			<TouchableHighlight 
			  onPress={this.onPressButton} 
			  onLongPress={this.onLongPressButton} underlayColor="white">
			  <View style={styles.button}>
				<Text style={styles.buttonText}>Touchable with Long Press</Text>
			  </View>
			</TouchableHighlight>
		  </View>
		);
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    margin: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
    buttonText: {
    padding: 20,
    color: 'white'
  }
})