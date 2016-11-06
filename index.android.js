/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

export default class Demo1 extends Component {
  render() {
    // let pic = {
    //   url:'/Users/jencol/Desktop/technica/office-team.jpg'
    // };
    return (
      

      <View style={styles.container}>
        <Image source={require('./office-team.jpg')} style={styles.backgroundImage}/>
        <Text style={styles.welcome}>
          Welcome to the SUITnPACKS APP!
        </Text>
        <Text style={styles.instructions}>
          Click here to Enter!{'\n'}
        </Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    color: '#333333',
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  backgroundImage: {
    width: 400,
    height: 400,
    flex: 1,
    resizeMode: 'cover',
  },
});

AppRegistry.registerComponent('Demo1', () => Demo1);
