import { View, Text, Button } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import HomeScreen from './screens/Home/HomeScreen'

const App = () => {
  return (
    <SafeAreaView>
      <HomeScreen />
    </SafeAreaView>
  )
}

export default App