import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location'

const WEATHER_API_KEY = '02fce8e3fb283a6f89e3dd66dd8744bf'
const BASE_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather?'

export default function App() {

  const [errorMessage, setErrorMessage] = useState(null)
  const [currentWeather, setCurrentWeather] = useState(null)
  const [unitsSystem, setUnitsSystem] = useState('metric')
  


  useEffect(() => {
    load()
  }, [unitsSystem])
  async function load(){
    try {
      let { status } = await Location.requestPermissionsAsync()
      if (status !== 'granted'){
       setErrorMessage('access to location is needed!!!')
       return
      }
      const location = await Location.getCurrentPositionAsync()

      

      const {latitude, longitude} = location.coords
      const weatherUrl = '${BASE_WEATHER_URL}lat=${latitude}&lon=${longitude}&units=${unitsSystem}&appid={WEATHER_API_KEY}'


      const response = await fetch (weatherUrl)
      const result = await response.json()
      
      if(response.ok){
        setCurrentWeather(result)
      }
      else{
        setErrorMessage(result.message)
      }

    } catch (error) {
      setErrorMessage(error.message)
    }


  }
  
  if(currentWeather){
    const {main : {temp}} = currentWeather
    return (
      <view style={styles.container}>
        <Text>{temp}</Text>
        <statusbar style= "auto" />
      </view>
    )
  }else {
    return (
      <view style = {styles.container}>
        <Text>{errorMessage}</Text>
        <StatusBar style= "auto"/>
      </view>  
    )
  }


  return (
    <View style={styles.container}>
      <Text>hello weather app</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
