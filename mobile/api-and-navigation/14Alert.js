import React, { Component } from 'react';
import { View, StyleSheet, Alert, Button, Linking} from 'react-native';
import { Constants } from 'expo';

export default class App extends Component {
  displayAlert(){
    Alert.alert(
      'Attention',
      'This is a basic alert with message. Are you Ok with this?',
      [
        {text: 'Learn More...', onPress: () => Linking.openURL('https://facebook.github.io/react-native/docs/alert'), style: 'cancel'},
        {text: 'Not Now', onPress: () => console.log('Not Now')},
		{text: 'Enable Dictation?', onPress: () => console.log('Enable Dictation')},
      ],
      { cancelable: false }
    )
  } 
  render() {
		return (
		  <View style={styles.container}>
        <Button
          onPress={this.displayAlert}
          title="Enable Dictation?"
        />
		
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
  }
})