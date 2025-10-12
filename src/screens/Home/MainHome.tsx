import { View, Text, StatusBar, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../App'
import MainSearchBar from '../../components/ScreenWiseComponents/HomeScreen/MainSearchBar'
import { Bell, ChevronDown, MapPin, ShoppingCartIcon } from 'lucide-react-native'
import SpecialForYou from '../../components/ScreenWiseComponents/HomeScreen/SpecialForYou'
import { SafeAreaView } from 'react-native-safe-area-context'
import Category from '../../components/ScreenWiseComponents/HomeScreen/Category'
import TopOfWeek from '../../components/ScreenWiseComponents/HomeScreen/TopOfWeek'
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { BottomTabParamList } from '../../components/Navigation/BottomBarTab'
import { CompositeScreenProps } from '@react-navigation/native'
import PopularProducts from '../../components/ScreenWiseComponents/HomeScreen/PopularProducts'

type CombinedProps = CompositeScreenProps<BottomTabScreenProps<BottomTabParamList, 'Home'>, NativeStackScreenProps<RootStackParamList>>;

export type MainHomeProps = CombinedProps;

const MainHome = ({ navigation }: MainHomeProps) => {
    return (
        <>
            <StatusBar className='bg-green-800' barStyle={'light-content'} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <SafeAreaView className='p-5 bg-green-800 rounded-b-3xl'>
                    <View className='py-4 flex flex-row items-center gap-5'>
                        <View className='w-[80%]'>
                            <MainSearchBar />
                        </View>
                        <View className='w-fit'>
                            <TouchableOpacity onPress={() => navigation.navigate('Cart')} className='p-3 border rounded-full border-gray-300 relative bg-white'>
                                <View>
                                    <Bell fill={'green'} color={'green'} />
                                </View>
                                <Text className='bg-green-700 font-extrabold absolute right-0 -top-1 text-xs text-white h-5 w-5 text-center rounded-full border-2 border-white'>4</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </SafeAreaView>
                <View className='p-5'>
                    <SpecialForYou />
                    <Category />
                    <TopOfWeek />
                    <PopularProducts />
                </View>
            </ScrollView>
        </>
    )
}

export default MainHome