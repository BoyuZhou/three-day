/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

import { getWeather } from './server';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

let position;


export default class App extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
            data:  [
                    {
                        "basic": {
                            "cid": "CN101010100",
                            "location": "北京",
                            "parent_city": "北京",
                            "admin_area": "北京",
                            "cnty": "中国",
                            "lat": "39.90498734",
                            "lon": "116.40528870",
                            "tz": "8.0"
                        },
                        "daily_forecast": [
                            {
                                "cond_code_d": "103",
                                "cond_code_n": "101",
                                "cond_txt_d": "晴间多云",
                                "cond_txt_n": "多云",
                                "date": "2017-10-26",
                                "hum": "57",
                                "pcpn": "0.0",
                                "pop": "0",
                                "pres": "1020",
                                "tmp_max": "16",
                                "tmp_min": "8",
                                "uv_index": "3",
                                "vis": "16",
                                "wind_deg": "0",
                                "wind_dir": "无持续风向",
                                "wind_sc": "微风",
                                "wind_spd": "5"
                            },
                            {
                                "cond_code_d": "101",
                                "cond_code_n": "501",
                                "cond_txt_d": "多云",
                                "cond_txt_n": "雾",
                                "date": "2017-10-27",
                                "hum": "56",
                                "pcpn": "0.0",
                                "pop": "0",
                                "pres": "1018",
                                "tmp_max": "18",
                                "tmp_min": "9",
                                "uv_index": "3",
                                "vis": "20",
                                "wind_deg": "187",
                                "wind_dir": "南风",
                                "wind_sc": "微风",
                                "wind_spd": "6"
                            },
                            {
                                "cond_code_d": "101",
                                "cond_code_n": "101",
                                "cond_txt_d": "多云",
                                "cond_txt_n": "多云",
                                "date": "2017-10-28",
                                "hum": "26",
                                "pcpn": "0.0",
                                "pop": "0",
                                "pres": "1029",
                                "tmp_max": "17",
                                "tmp_min": "5",
                                "uv_index": "2",
                                "vis": "20",
                                "wind_deg": "2",
                                "wind_dir": "北风",
                                "wind_sc": "3-4",
                                "wind_spd": "19"
                            }
                        ],
                        "status": "ok",
                        "update": {
                            "loc": "2017-10-26 23:09",
                            "utc": "2017-10-26 15:09"
                        }
                    }
                ]
            ,
            position: ''

        }
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            (position) =>{
                console.log(position);
                getWeather(`${position.latitude},${position.longitude}`)
                    .then((res) => {
                    if(res.data.HeWeather6.status === 'ok'){
                        this.setState({
                            data: res.data,
                        })
                    }

                })
                /*your code here*/
            },
            (error) => console.log(error.message),
            {timeout: 20000, maximumAge: 1000}
        );

    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    { this.state.data[0].basic.location }
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit App.js
                </Text>
                <Text style={styles.instructions}>
                    {instructions}
                </Text>
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
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
