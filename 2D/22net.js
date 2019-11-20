
import React, { Component } from 'react';
import { View, FlatList, ActivityIndicator, Text, StyleSheet} from 'react-native';
import { Constants } from 'expo';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state ={ 
      isLoading: true
    }
  }

  componentDidMount(){
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((res) => {
        this.setState({
          isLoading: false,
          data: res.movies,
        }, function(){
        });
      })
      .catch((error) =>{
        console.error(error);
      });
  }

  render(){
    if(this.state.isLoading){
      return(
        <View style={[styles.container, {justifyContent: 'center', alignItems: 'center'}]}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <FlatList style={styles.container}
        data={this.state.data}
        renderItem={({item}) => <Text style={styles.row}>{item.title}, {item.releaseYear}</Text>}
        keyExtractor={({id}, index) => id}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1
  },
  row: {
    padding: 12,
    marginBottom: 5,
    backgroundColor: 'skyblue'
  }
})