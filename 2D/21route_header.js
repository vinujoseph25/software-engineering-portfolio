import React from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';

class HomeScreen extends React.Component {
	 static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Details"
          onPress={() => this.props.navigation.navigate('Details', {id:681})}
        />
      </View>
    );
  }  
}

class DetailsScreen extends React.Component {
	static navigationOptions = {
    title: 'Details',
  };
  render() {
	  const itemId = this.props.navigation.getParam('id');
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
		 <Text>itemId: {JSON.stringify(itemId)}</Text>
        
		 
		<Button
          title="Go to Third"
          onPress={() => this.props.navigation.navigate('Third')}
        />
		
      </View>
    );
  }  
}


class ThirdScreen extends React.Component {
	static navigationOptions = {
    title: 'Last',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Third Screen</Text>
		<Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
		<Button
          title="Home"
          onPress={() => this.props.navigation.popToTop()}
        />
      </View>
    );
  }  
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
   Third: {
    screen: ThirdScreen,
  },
  Details: {
    screen: DetailsScreen,
  },
}, {
    initialRouteName: 'Home',
});

export default createAppContainer(AppNavigator);