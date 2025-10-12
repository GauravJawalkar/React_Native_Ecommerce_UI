import { View, Text, Image, TouchableOpacity, FlatList, Pressable } from 'react-native'
import React from 'react'

interface topWeekData {
    id: number,
    image: any,
    title: string,
    price: number
}

const TopOfWeek = () => {
    const data = [
        {
            id: 1,
            image: require('../../../assets/Test/alovera.png'),
            title: 'Magical Aloe Vera Plant',
            price: 250
        },
        {
            id: 2,
            image: require('../../../assets/Test/alovera.png'),
            title: 'Aloe Vera Magical Plant',
            price: 350
        },
        {
            id: 3,
            image: require('../../../assets/Test/alovera.png'),
            title: 'Vera Plant Magical Aloe ',
            price: 450
        },
    ]

    const productCard = ({ item }: { item: topWeekData }) => {
        return (
            <TouchableOpacity activeOpacity={0.6}>
                <View className='bg-gray-200 rounded-2xl mr-5 h-[170px] w-[140px]'>
                    <Image source={item?.image} className='w-full h-full object-contain' />
                </View>
                <View className='w-[140px] my-2'>
                    <Text numberOfLines={1} className='font-semibold text-lg truncate w-full'>{item?.title}</Text>
                    <Text className='text-xl font-bold text-green-800'>₹ {item?.price}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View>
            <View className='py-3 flex flex-row items-center justify-between'>
                <Text className='text-2xl font-semibold text-neutral-700'>Top of the week</Text>
                <Pressable><Text className='text-neutral-700'>See More</Text></Pressable>
            </View>
            <View>
                <FlatList
                    className='pl-5 -mx-5 py-4'
                    data={data}
                    keyExtractor={(product) => product?.id.toString()}
                    renderItem={productCard}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </View>
    )
}

export default TopOfWeek