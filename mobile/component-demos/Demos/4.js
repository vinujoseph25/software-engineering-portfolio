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
        <Text style={styles.welcomeText}>Hello {this.state.user}, Welcome to React Native!!!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke'
  },
  welcomeText: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})
