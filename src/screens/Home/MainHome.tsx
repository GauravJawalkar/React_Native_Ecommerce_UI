import { View, Text, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../App'
import { SafeAreaView } from 'react-native-safe-area-context'
import MainSearchBar from '../../components/ScreenWiseComponents/HomeScreen/MainSearchBar'
import { ShoppingCartIcon } from 'lucide-react-native'

type MainHomeProps = NativeStackScreenProps<RootStackParamList, 'MainHomeScreen'>

const MainHome = ({ navigation }: MainHomeProps) => {
    return (
        <>
            <StatusBar className='bg-gray-100' barStyle={'dark-content'} />
            <SafeAreaView className='p-5 '>
                <View className='flex items-center justify-between flex-row'>
                    <MainSearchBar />
                    <TouchableOpacity onPress={() => navigation.navigate('CartScreen')} className='p-3 border rounded-full border-gray-300 bg-gray-100 relative'>
                        <View>
                            <ShoppingCartIcon />
                        </View>
                        <Text className='bg-green-700 font-extrabold absolute right-0 top-0 text-xs text-white h-5 w-5 text-center rounded-full border-2 border-white'>4</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </>
    )
}

export default MainHome