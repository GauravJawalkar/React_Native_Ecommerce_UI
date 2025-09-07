import { View, Text, Button, TouchableOpacity } from 'react-native'
import React from 'react'

const HomeScreen = () => {
    return (
        <View className='flex items-center justify-center h-screen'>
            <Text className='font-bold text-2xl'>Will Make A Minimal UI</Text>
            <TouchableOpacity>
                <Text className='capitalize text-white bg-blue-500 py-2 px-4 rounded-xl'>
                    Button In tailwind
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeScreen