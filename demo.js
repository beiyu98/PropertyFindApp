'use strict'

var React = require('react-native');

var styles = React.StyleSheet.create({
    text: {
        color: 'black',
        backgroundColor: 'white',
        fontSize: 30,
        margin: 80
    }
});

class PropertyFindApp extends React.Component {

    render() {
        return React.createElement(React.Text, {style: styles.text}, "hello world!");
    }
}

React.AppRegistry.registerComponent('PropertyFind', function () {
    return PropertyFindApp
});