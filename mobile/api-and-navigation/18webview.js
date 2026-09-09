import React, {Component} from 'react';
import {View,Text, WebView, StyleSheet} from 'react-native';
import { Constants } from 'expo';

export default class App extends Component {
  render() {
    return (
      <WebView
        originWhitelist={['*']}
        source={{ html: '<h1>Hello world</h1> <h2>New </h2> ' }}
        style={{marginTop: 20}}
      />
    );
  }
}