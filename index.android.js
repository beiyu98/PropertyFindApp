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
import SearchResults from './SearchResults'

export default class PropertyFinder extends Component {
  render() {
    return (
        <Navigator
            initialRoute={{
                title:'Property Finder',
                component: SearchPage
            }}
            renderScene={(route,navigator)=>{
                return<route.component navigator = {navigator} {...route.passProps}/>
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
