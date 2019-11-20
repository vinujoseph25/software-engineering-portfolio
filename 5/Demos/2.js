import React, {Component} from 'react';
import { View, Text, StyleSheet} from 'react-native';


export default class App extends Component {
  constructor(){
    super();
    this.state={
      user:"Roopa"
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello {this.state.user}, Welcome to React Native!!!</Text>
		
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    paddingTop: 25
  }
})