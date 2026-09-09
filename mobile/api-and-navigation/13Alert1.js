import React, { Component } from 'react';
import { View, StyleSheet, Alert, Button } from 'react-native';
import { Constants } from 'expo';

export default class App extends Component {
  displayAlert(){
    Alert.alert( "Click OK to continue"
    )
  } 
  render() {
		return (
		  <View style={styles.container}>
        <Button
          onPress={this.displayAlert}
          title="Display Alert"
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
