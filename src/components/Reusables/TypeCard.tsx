import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const TypeCard = () => {
    return (
        <View className='flex flex-row items-center justify-center px-6 bg-green-700/10 rounded-xl relative'>
            <View className='w-[60%] flex items-start justify-between'>
                <View className='py-3'>
                    <Text className='font-semibold text-2xl uppercase text-green-800'>Indoor Plants</Text>
                    <Text className='text-sm text-gray-500 line-clamp-2'>Indoor Plants on this platform are the best to buy</Text>
                </View>
                <TouchableOpacity className='py-3 px-6 bg-green-800/80 rounded-lg w-fit my-1'>
                    <Text className='text-white font-medium'>Order Now</Text>
                </TouchableOpacity>
            </View>
            <View className='h-[150px] w-[40%]'>
                <Image source={require('../../assets/HomeBanners/test.png')} className='h-full w-full object-cover' />
            </View>
            <Text className='absolute top-3 right-3 text-white bg-green-800 rounded-full px-3 py-1 text-sm font-semibold '>25% OFF</Text>
        </View>
    )
}

export default TypeCard