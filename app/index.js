/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Main from './containers/Main';
import Add from './containers/Add';


import {
    StackNavigator,
} from 'react-navigation';

const Home = StackNavigator({
    Main: {
        screen: Main
    },
    Add: {screen: Add}
});


export default Home;