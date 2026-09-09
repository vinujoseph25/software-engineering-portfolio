import React, { Component } from 'react';
import { Text, View, StyleSheet, Switch } from 'react-native';


export default class App extends Component {
  constructor(){
    super();
    this.state = {
    status: 'ON',
    showstatus: true
    }
  }

  onSwitch(value){
    this.setState({
    showstatus: value
    })
  }

  render() {
    let status = this.state.showstatus ? this.state.status:'OFF'
    return (
      <View style={styles.container}>
          <Text style={styles.paragraph}>{status}</Text>
          <Switch value={this.state.showstatus} onValueChange={(value) => this.onSwitch(value)}/>
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
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  }
})