import { View, Text, Button } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const App = () => {
  return (
    <SafeAreaView>
      <View className='flex-1 items-center justify-center flex-row'>
        <Text className='text-2xl bg-yellow-500 text-red-500 py-2 px-5 rounded-full '>UI Building in React-Native Application</Text>
        <View className='text-white bg-amber-600 px-4 py-2 rounded-xl'><Button title='Tailwind Button' /></View>
      </View>
    </SafeAreaView>
  )
}

export default App