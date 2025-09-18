import { View, Text, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AppleIcon, ArrowLeft } from 'lucide-react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../App'

type SignUpScreenProps = NativeStackScreenProps<RootStackParamList, 'SignupScreen'>

const Signup = ({ navigation }: SignUpScreenProps) => {
    return (
        <SafeAreaView className='p-5'>
            <View className='pt-3'>
                <Pressable onPress={() => navigation.navigate('LoginScreen')}>
                    <ArrowLeft size={25} />
                </Pressable>
            </View>
            <View>
                <TouchableOpacity className='flex flex-row gap-4 items-center justify-center py-3 border border-gray-300 rounded-lg'>
                    <Text>
                        <AppleIcon />
                    </Text>
                    <Text className='font-bold text-lg'>
                        Sign in with Google
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView >
    )
}

export default Signup