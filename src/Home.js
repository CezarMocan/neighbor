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
  Navigator,
  TouchableOpacity
} from 'react-native';

import PhotoCapture from './PhotoCapture'
//import MapView from 'react-native-maps';

class Home extends React.Component {
  constructor(props) {
    super(props)
    //console.log(props)
    this._onForward = this._onForward.bind(this)
  }

  _onForward() {
    this.props.navigator.push({
      component: PhotoCapture,
      title: 'Photo Capture',
    });
  }

  render() {
    return (
      <View style={{padding: 100}}>
        <Text>Current Scene: { this.props.route.title }</Text>
        <TouchableOpacity onPress={this._onForward}>
          <Text>Tap me to load the next scene</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

Home.propTypes = {
    route: React.PropTypes.object.isRequired,
    navigator: React.PropTypes.object.isRequired
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
});

module.exports = Home
