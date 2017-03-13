/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
    Navigator,
} from 'react-native';

import SearchPage from './SearchPage'

export default class PropertyFinder extends Component {
  render() {
    return (
        <Navigator
            style={styles.container}
            initialRoute={{
                title:'Property Finder'
            }}
            renderScene={(route,navigator)=>{
                return<SearchPage/>
            }}
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text:{
      color:'black',
      backgroundColor:'white',
      fontSize:30,
      margin:80
  }
});

AppRegistry.registerComponent('PropertyFinder', () => PropertyFinder);
