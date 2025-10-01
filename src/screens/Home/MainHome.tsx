import { View, Text } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../App'

type MainHomeProps = NativeStackScreenProps<RootStackParamList, 'MainHomeScreen'>

const MainHome = ({ navigation }: MainHomeProps) => {
    return (
        <View>
            <Text>This is the main home screen</Text>
        </View>
    )
}

export default MainHome