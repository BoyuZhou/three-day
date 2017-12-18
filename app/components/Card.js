import React, { Component } from 'react';

import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

import imageIcon from './WeatherImage'



export default class Card extends Component{
    render() {
        let { weather } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.info}>
                    <View style={styles.weather}>
                        <Text style={styles.font}>
                            { weather.cond_txt_d }
                        </Text>
                    </View>
                    <View style={styles.tmp}>
                        <Text style={styles.font}>
                            { `${weather.tmp_min}°C-${weather.tmp_max}°C` }
                        </Text>
                    </View>
                    <View style={styles.wind}>
                        <Text style={styles.font}>
                            { `${weather.wind_sc}` }
                        </Text>
                    </View>
                    <View style={styles.date}>
                        <Text style={styles.font}>
                            { weather.date }
                        </Text>
                    </View>
                </View>
                <Image
                    style={styles.icon}
                    source={imageIcon[weather.cond_code_d]}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#ABD0CE',
        height: 160,
        marginBottom:10,
        borderRadius: 16,
        flexDirection:'row',
        padding: 10
    },
    weather: {
        flex: 1,
    },
    tmp: {
        flex: 1,
    },
    date: {
        flex: 1,
    },
    wind: {
        flex: 1,
    },
    icon: {
        width: 100,
        height: 100
    },
    info: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    font: {
        color: '#FFF',
        fontSize: 20,
        textAlign: 'center'
    }
});