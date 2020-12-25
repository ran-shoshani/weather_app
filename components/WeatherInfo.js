import React from 'react'
import { View, Text ,StyleSheet , Image} from 'react-native'

export default function WeatherInfo({currentWeather}) {
    const { main: { temp }, weather: [details] , name , } = currentWeather
    
    const {icon,main, description} = details
    // icon from open-weather as an array
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@3x.png`
    return (
        <View style={styles.WeatherInfo}>
            <Text>{name}</Text>
            <Image source = {{ uri: iconUrl }}/>
            <Text>{temp}</Text>
            <Text>{description}</Text>
            <Text>{main}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    WeatherInfo: {
        alignItems: 'center'
    },
    weatherIcon: {
        width: 100,
        height: 100,
    },
})