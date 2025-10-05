import { View, Text, StatusBar, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../App'
import MainSearchBar from '../../components/ScreenWiseComponents/HomeScreen/MainSearchBar'
import { ChevronDown, MapPin, ShoppingCartIcon } from 'lucide-react-native'
import SpecialForYou from '../../components/ScreenWiseComponents/HomeScreen/SpecialForYou'
import { SafeAreaView } from 'react-native-safe-area-context'

type MainHomeProps = NativeStackScreenProps<RootStackParamList, 'MainHomeScreen'>

const MainHome = ({ navigation }: MainHomeProps) => {
    return (
        <>
            <StatusBar className='bg-green-800' barStyle={'light-content'} />
            <SafeAreaView className='p-5 bg-green-800 rounded-b-3xl'>
                <View className='py-4'>
                    <View className='flex flex-row items-center justify-between'>
                        <View className='flex flex-row items-center justify-start gap-2 py-2'>
                            <MapPin stroke={'white'} />
                            <Text className='text-white text-lg font-medium'>On Earth, Maharashtra</Text>
                            <ChevronDown color={'white'} size={20}/>
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate('CartScreen')} className='p-3 border rounded-full border-gray-300 relative bg-white'>
                            <View>
                                <ShoppingCartIcon color={'green'} />
                            </View>
                            <Text className='bg-green-700 font-extrabold absolute right-0 -top-1 text-xs text-white h-5 w-5 text-center rounded-full border-2 border-white'>4</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View className='pb-4'>
                    <MainSearchBar />
                </View>
            </SafeAreaView>
            <View className='p-5'>
                <SpecialForYou />
                
            </View>
        </>
    )
}

export default MainHome