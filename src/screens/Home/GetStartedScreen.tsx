import { View, Text, Button, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import { Sprout, TreePalm } from 'lucide-react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const GetStartedScreen = () => {
    return (
        <>
            <StatusBar className='bg-green-900' />
            <SafeAreaView className='h-screen bg-green-900 p-4 font-inter'>
                <View className='flex-1 justify-center items-center gap-5'>
                    <Sprout size={70} fill={"teal"} color={"white"} />
                    <Text className='font-inter-extrabold text-4xl text-white'>Ecco_Web</Text>
                </View>
                <TouchableOpacity activeOpacity={0.7} className='mb-10'>
                    <Text className='capitalize font-inter-bold border text-green-800 bg-white py-3 px-4 rounded-lg text-center text-lg'>
                        Get Started
                    </Text>
                </TouchableOpacity>
            </SafeAreaView>
        </>
    )
}

export default GetStartedScreen