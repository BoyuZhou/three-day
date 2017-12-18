import React, {Component} from 'react';
import {FlatList, Platform, StyleSheet, Text, View, AsyncStorage} from 'react-native';

import {getAirInfo, getWeather} from '../server';
import Card from '../components/Card';

import { get, save } from '../lib/asyncStorage';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class Main extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
            location: '北京',
            weathers: [

            ],
            airInfo: {

            },
        }

    }

    static navigationOptions = {
        title: '三日',
        headerStyle: {backgroundColor: '#F0E5DE'},
        headerTitleStyle: {color: '#7C7877'},
        headerRight: <Text style={{color: '#ABD0CE'}}>添加城市</Text>
    };

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            (res) => {
                getWeather(`${res.coords.latitude},${res.coords.longitude}`)
                    .then((res) => {
                        let data = res.data.HeWeather6[0];
                        console.log(data);
                        if (data.status === 'ok') {
                            let weathers = data.daily_forecast;
                            weathers.forEach((item) => {
                                item.key = item.pres;
                            });

                            this.setState({
                                location: data.basic.location,
                                weathers
                            })
                        }

                    })

                getAirInfo(`${res.coords.latitude},${res.coords.longitude}`)
                    .then((res) => {
                        let data = res.data.HeWeather6[0];
                        console.log(data)
                        if (data.status === 'ok') {
                            let airInfo = data.air_now_city;
                            this.setState({
                                airInfo: airInfo
                            })
                        }
                    })
            },
            (error) => console.log(error.message),
            {timeout: 20000, maximumAge: 1000}
        );


    }

    render() {
        let {weathers, location, airInfo} = this.state;
        return (
            <View style={styles.container}>
                <Text style={styles.city}>
                    {location}
                </Text>
                <Text style={styles.airInfo}>
                    { `空气质量 ${airInfo.qlty}` }
                </Text>
                <FlatList
                    style={styles.list}
                    data={weathers}
                    renderItem={({item}) => <Card weather={item}/>}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    city: {
        width: '100%',
        height: 50,
        lineHeight: 50,
        textAlign: 'center',
        color: '#6E7783',
        backgroundColor: '#D9D4CF',
        fontSize: 25,
        fontWeight: '300'
    },
    list: {
        width: '100%',
        padding: 10
    },
    changecity: {
        color: '#ccc'
    },
    airInfo: {
        width: 100,
        height: 20,
        lineHeight: 20,
        backgroundColor: '#7C7877',
        color: '#FFF',
        textAlign: 'center',
        borderRadius: 100
    }
});