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
  TouchableHighlight
} from 'react-native';

//import MapView from 'react-native-maps';

class Camera extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
    this._onForward = this._onForward.bind(this)
  }

  _onForward() {
    this.props.navigator.pop();
  }

  render() {
    return (
      <View style={{padding: 100}}>
        <Text>Current Scene: { this.props.route.title }</Text>
        <TouchableHighlight onPress={this._onForward}>
          <Text>Tap me to load the next scene</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

Camera.propTypes = {
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

module.exports = Camera
