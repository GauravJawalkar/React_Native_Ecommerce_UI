import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ArrowLeft } from 'lucide-react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { BottomTabParamList } from '../../components/Navigation/BottomBarTab'

type CartScreeProps = NativeStackScreenProps<BottomTabParamList, 'Cart'>

const Cart = ({ navigation }: CartScreeProps) => {
    return (
        <SafeAreaView className='p-5'>
            <View className='pt-3'>
                <Pressable onPress={() => navigation.goBack()}>
                    <ArrowLeft size={25} />
                </Pressable>
            </View>
            <Text>CART SCREEN</Text>
        </SafeAreaView>
    )
}

export default Cart