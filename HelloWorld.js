'use strict'

import React from 'react';

import {
    StyleSheet,
    Text
} from 'react-native';

export default class HelloWorld extends React.Component {

    // render() {
    //     return React.createElement(Text, {style: styles.text}, "hello world!");
    // }

    render() {
        return (
            <Text style={styles.text}>hello world!</Text>
        )
    }

}

const styles = StyleSheet.create({
    text: {
        color: 'black',
        backgroundColor: 'white',
        fontSize: 30,
        margin: 80
    }
});