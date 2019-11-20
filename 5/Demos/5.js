import React, {Component} from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';

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
        <Text style={styles.welcome} style={{color:'red'}}>Hello {this.state.user}, Welcome to React Native!!!</Text>
        <Image style = {{ width: 300, height: 200 }}  source={{uri: 'https://cdn-images-1.medium.com/max/1600/1*mrOXGyIa3BlPK80peLmEbA.png'}} /> 
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
  welcome: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  image: {
    width: 200,
    height: 200
  }
})