import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ArrowLeft } from 'lucide-react-native'
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
        </SafeAreaView>
    )
}

export default Signup