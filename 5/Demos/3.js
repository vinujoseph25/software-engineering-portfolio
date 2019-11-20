import React, {Component} from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';

export default class App extends Component {
  constructor(){
    super();
  }
  render() {
    return (
      <View style={styles.container}>
	  <ScrollView >
        <View style={styles.box}>
		<Text>Here...</Text>
		</View>
		<View style={styles.box}>
		<Text>Here...</Text>
		</View>
		<View style={styles.box}>
		<Text>Here...</Text>
		</View>
		<View style={styles.box}>
		<Text>Here...</Text>
		</View>
		<View style={styles.box}>
		<Text>Here...</Text>
		</View>
		</ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
	flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  box:{
    width:200,
    height: 200,
    backgroundColor: 'skyblue',
    borderWidth: 2,
    borderRadius:12
  }
})