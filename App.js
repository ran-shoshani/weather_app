import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location'


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
      alert('Latitude : ${latitude}, Longitude: ${longitude}')
    } catch (error) {}

    
  }
  return (
    <View style={styles.container}>
      <Text>hello weather app</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
