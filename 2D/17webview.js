import React, {Component} from 'react';
import {View,Text, WebView, StyleSheet} from 'react-native';
import { Constants } from 'expo';

export default class App extends Component {
  render() {
    return (
      <WebView
        originWhitelist={['*']}
        source={{ uri: 'https://www.google.com/' }}
        style={{marginTop: 20}}
      />
    );
  }
}