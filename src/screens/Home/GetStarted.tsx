import { View, Text, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import { Sprout } from 'lucide-react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../App'
import { useSelector } from 'react-redux'
import { RootState } from '../../lib/redux/store'

type GetStartedScreenProps = NativeStackScreenProps<RootStackParamList, 'GetStartedScreen'>

const GetStartedScreen = ({ navigation }: GetStartedScreenProps) => {
    const userDetails = useSelector((state: RootState) => state.auth.user);
    console.log("The userDetails are :", userDetails);
    return (
        <>
            <StatusBar className='bg-green-900' barStyle={'light-content'} />
            <SafeAreaView className='h-screen bg-green-900 p-4 '>
                <View className='flex-1 justify-center items-center gap-5'>
                    <Sprout size={70} fill={"teal"} color={"white"} />
                    <Text className='text-4xl text-white font-bold'>Ecco_Marketplace</Text>
                </View>
                <TouchableOpacity onPress={() => { navigation.navigate("LoginScreen") }} activeOpacity={0.8} className='mb-5'>
                    <Text className='capitalize font-semibold border text-green-800 bg-white py-3 px-4 rounded-lg text-center text-lg'>
                        Get Started
                    </Text>
                </TouchableOpacity>
            </SafeAreaView>
        </>
    )
}

export default GetStartedScreen