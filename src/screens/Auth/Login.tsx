import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../App'

type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>

const Login = ({ navigation }: LoginScreenProps) => {
    return (
        <SafeAreaView >
            <Text>Login Screen</Text>
            <TouchableOpacity onPress={() => { navigation.navigate("SignupScreen") }}>
                <Text>SignUp</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Login