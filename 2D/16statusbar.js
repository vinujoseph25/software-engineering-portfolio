import React, {Component} from 'react';
import {Text,View , StatusBar, StyleSheet} from 'react-native';
import { Constants } from 'expo';

export default class App extends Component {
  
  render() {
    return (
      <View style={styles.container}>
        <StatusBar networkActivityIndicatorVisible={true}  barStyle = "light-content" hidden = {false} backgroundColor = "red"  />
		    <Text>SatusBar Demo...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex:1,
    justifyContent: 'center',
    alignItems:'center'
  }
})