import React from 'react'
import { View, Text ,StyleSheet} from 'react-native'

export default function WeatherInfo({currentWeather}) {
    const { main: { temp }, wether: [details]} = currentWeather
    
    const {icon} = details
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`
    return (
        <View>
            <Text>{temp}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    WeatherInfo: {
        alignItems: 'center'
    }
})