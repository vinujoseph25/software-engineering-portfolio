import React, { Component } from 'react';
import { View, StyleSheet, Text, Slider } from 'react-native';


export default class App extends Component {
  constructor(){
    super();
    this.state ={
      volume: 2
    }
  }
 
  render() {
		return (
		  <View style={styles.container}>
        <Text>volume: {this.state.volume}</Text>
        <Slider 
          minimumValue="1"
          maximumValue="5"
          
minimumTrackTintColor="grey"
maximumTrackTintColor="black"

          value={this.state.rooms}
          onSlidingComplete={(value) => (this.setState({volume:value}))}
          style={{ width: 200 }}
        />
		  </View>
		);
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})