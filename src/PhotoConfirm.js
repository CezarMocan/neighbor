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
  TouchableHighlight,
  Dimensions,
  Image,
  CameraRoll
} from 'react-native';

//import MapView from 'react-native-maps';

class PhotoConfirm extends React.Component {
  constructor(props) {
    super(props)
    //console.log(props)
  }

  _onConfirm() {
    console.log('confirmed!')
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={{uri: this.props.imageData.path, isStatic: true}} style={styles.preview}>
          <Text style={styles.capture} onPress={this._onConfirm.bind(this)}>[OK!]</Text>
        </Image>
      </View>
    );
  }
}

PhotoConfirm.propTypes = {
    route: React.PropTypes.object.isRequired,
    navigator: React.PropTypes.object.isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});

module.exports = PhotoConfirm
