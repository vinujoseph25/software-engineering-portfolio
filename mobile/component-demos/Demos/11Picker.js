import React, { Component } from 'react';
import { View, StyleSheet, Picker, Text } from 'react-native';


export default class App extends Component {
  constructor(){
    super();
    this.state ={
      location: ""
    }
  }
  
  update = (location) => {
      this.setState({ location:location})
   }
 
  render() {
		return (
		  <View style={styles.container}>
		  <Text style = {styles.pick}>{this.state.location}</Text>
        <Picker
          selectedValue={this.state.location} onValueChange = {this.update}
          style={{ height: 50, width: 100 }}
          >
          <Picker.Item label="Mys" value="Mysore" />
          <Picker.Item label="Bng" value="Bangalore" />
          <Picker.Item label="TVM" value="Trivandrum" />
		  <Picker.Item label="Hyd" value="Hyderabad" />
        </Picker> 

		
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
  },
  pick: {
      fontSize: 30,
      alignSelf: 'center',
	  
      color: 'red'
   }
})