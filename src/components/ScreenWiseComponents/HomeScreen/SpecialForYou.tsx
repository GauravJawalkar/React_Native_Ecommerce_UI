import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'

const SpecialForYou = () => {
    return (
        <View>
            <View>
                <Text className='text-2xl font-semibold'>#SpecialForYou</Text>
            </View>
            <ScrollView horizontal={true} className='flex flex-row gap-2 py-5 pl-5 -mx-5' showsHorizontalScrollIndicator={false}>
                <View className='h-[150px] w-[300px] object-contain relative mr-5'>
                    <Image source={require('../../../assets/HomeBanners/Banner4.jpg')} className='h-full w-full object-contain rounded-3xl shadow-lg' />
                    <Text className='absolute text-black bg-white py-1 px-3 rounded-full text-sm top-2.5 left-2.5'>Limited time!</Text>
                </View>
                <View className='h-[150px] w-[300px] object-contain relative mr-5'>
                    <Image source={require('../../../assets/HomeBanners/Banner5.jpg')} className='h-full w-full object-contain rounded-3xl shadow-lg' />
                    <Text className='absolute text-black bg-white py-1 px-3 rounded-full text-sm top-2.5 left-2.5'>Limited time!</Text>
                </View>
                <View className='h-[150px] w-[300px] object-contain relative pr-5 mr-5'>
                    <Image source={require('../../../assets/HomeBanners/Banner3.jpg')} className='h-full w-full object-contain rounded-3xl shadow-lg' />
                    <Text className='absolute text-black bg-white py-1 px-3 rounded-full text-sm top-2.5 left-2.5'>Limited time!</Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default SpecialForYou