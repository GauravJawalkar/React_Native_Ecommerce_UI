import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

const SpecialForYou = () => {
    return (
        <View>
            <View>
                <Text className='text-2xl font-semibold'>#SpecialForYou</Text>
            </View>
            <ScrollView horizontal={true} className='flex flex-row gap-2 py-5 pl-5 -mx-5' showsHorizontalScrollIndicator={false}>
                <View className='h-[150px] w-[300px] object-contain relative mr-5'>
                    <Image source={require('../../../assets/HomeBanners/Banner4.jpg')} className='h-full w-full object-contain rounded-3xl' />
                    <Text className='absolute text-black bg-white py-1 px-3 rounded-full text-sm top-2.5 left-2.5'>Limited time!</Text>
                </View>
                <View className='h-[150px] w-[300px] object-contain relative mr-5'>
                    <Image source={require('../../../assets/HomeBanners/Banner5.jpg')} className='h-full w-full object-contain rounded-3xl' />
                    <Text className='absolute text-black bg-white py-1 px-3 rounded-full text-sm top-2.5 left-2.5'>Limited time!</Text>
                </View>
                <View className='h-[150px] w-[300px] object-contain relative mr-5'>
                    <Image source={require('../../../assets/HomeBanners/Banner3.jpg')} className='h-full w-full object-contain rounded-3xl' />
                    <Text className='absolute text-black bg-white py-1 px-3 rounded-full text-sm top-2.5 left-2.5'>Limited time!</Text>
                </View>
            </ScrollView>
            <View className='flex flex-row items-center justify-center px-6 bg-green-700/10 rounded-xl'>
                <View className='w-[60%] flex items-start justify-between'>
                    <View className='py-4'>
                        <Text className='font-semibold text-2xl'>Home Decoratives</Text>
                        <Text className='text-gray-600 font-semibold text-[15px] pb-2'>Discount 25%</Text>
                    </View>
                    <TouchableOpacity className='py-3 px-6 bg-green-800/80 rounded-lg w-fit'>
                        <Text className='text-white font-medium'>Order Now</Text>
                    </TouchableOpacity>
                </View>
                <View className='h-[150px] w-[40%]'>
                    <Image source={require('../../../assets/HomeBanners/test.png')} className='h-full w-full object-cover' />
                </View>
            </View>
        </View>
    )
}

export default SpecialForYou