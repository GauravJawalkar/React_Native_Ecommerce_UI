import { View, Text } from 'react-native'
import React from 'react'

const SaleTime = () => {
    return (
        <View className='flex flex-row items-center justify-between py-2'>
            <Text className='text-2xl font-semibold'>Flash Sale</Text>
            <View className='flex flex-row items-center justify-center gap-2'>
                <Text className='text-gray-500 font-semibold'>Closing in :</Text>
                <Text className='bg-green-800/10 py-1 px-2 font-semibold rounded text-green-600'>02 : 12 : 56</Text>
            </View>
        </View>
    )
}

export default SaleTime