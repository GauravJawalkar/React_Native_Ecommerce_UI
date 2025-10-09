import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'

const TopOfWeek = () => {
    return (
        <View>
            <View className='py-2'>
                <Text className='text-2xl font-semibold'>Top of Week</Text>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {/* Product card */}
                <View>
                    <Image source={require('../../../assets/Test/alovera.png')} height={300} width={200} className='h-[300px] w-[200px]' />
                </View>
            </ScrollView>
        </View>
    )
}

export default TopOfWeek