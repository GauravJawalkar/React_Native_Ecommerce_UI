import { View, Text } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../App'

type VerificationscreenProps = NativeStackScreenProps<RootStackParamList, 'VerificationScreen'>

const Verification = ({ route, navigation }: VerificationscreenProps) => {
    console.log("The route data is : ", route?.params);
    return (
        <View>
            <Text>Verification</Text>
        </View>
    )
}

export default Verification