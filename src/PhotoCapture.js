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
  Dimensions
} from 'react-native';

import Camera from 'react-native-camera';
import PhotoConfirm from './PhotoConfirm'

//import MapView from 'react-native-maps';

class PhotoCapture extends React.Component {
  constructor(props) {
    super(props)
    //console.log(props)
  }

  _onForward() {
    this.props.navigator.pop();
  }

  takePicture() {
    this.camera.capture()
      .then((data) => {
        console.log(data)
        this.props.navigator.push({
          component: PhotoConfirm,
          title: 'Photo Confirm',
          passProps: {
            imageData: data
          }
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}
          captureTarget={Camera.constants.CaptureTarget.disk}>
          <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
        </Camera>
      </View>
    );
  }
}

PhotoCapture.propTypes = {
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

module.exports = PhotoCapture
