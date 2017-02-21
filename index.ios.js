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
  View,
  NavigatorIOS,
  TouchableHighlight
} from 'react-native';

import MapView from 'react-native-maps';
import Home from './src/Home'

export default class neighbor extends Component {

  constructor(props) {
    super(props)
    this.state = {
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }
    }
    this.onRegionChange = this.onRegionChange.bind(this)
  }

  onRegionChange(region) {
    this.setState({ region });
  }

/*
  <MapView
    style={styles.map}
    region={this.state.region}
    onRegionChange={this.onRegionChange}
  />
*/

  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: Home,
          title: 'Home',
        }}
        style={{flex: 1}}
        navigationBarHidden={true}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,  
  },
  home: {
    //flex: 1,
    //flexDirection: 'column',
    //justifyContent: 'center',
    //alignItems: 'center',
    padding: 100
  }
});

AppRegistry.registerComponent('neighbor', () => neighbor);
