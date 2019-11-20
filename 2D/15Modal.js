import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, Button ,View, Alert, StyleSheet} from 'react-native';
import { Constants } from 'expo';

export default class App extends Component {
  state = {
    toggleModal: false,
  };
  toggleModalVisibility() {
    this.setState({toggleModal: !this.state.toggleModal});
  }
  render() {
    return (
      <View style={styles.container}>
        <Modal  animationType="slide" transparent={false} visible={this.state.toggleModal} style={{border:'2px solid yellow'}}
         /*  onDismiss={() => {
            Alert.alert('Modal has been closed.');
          }} */>
          <View style={{marginTop: 500}}>
		  
            <View>
              <Text >Use Modal to present content above an enclosing view
			  </Text>
              <Button onPress={() => {this.toggleModalVisibility();}}
                title="cancel"
              />
            </View>
          </View>
        </Modal>
        <Button onPress={() => { this.toggleModalVisibility();}} title="Show Modal"/>
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
