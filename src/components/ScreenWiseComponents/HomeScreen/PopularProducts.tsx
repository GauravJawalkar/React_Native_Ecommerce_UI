import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import { ProductCardProps } from '../../../interfaces/types'


const PopularProducts = () => {

    const popularProductsData = [
        {
            id: 1,
            title: 'Aloe Vera Herbal Plant',
            imageLink: require('../../../assets/Categories/pump.png'),
        },
        {
            id: 2,
            title: 'Mini Cactus Indoor Plant',
            imageLink: require('../../../assets/Categories/cactusNew.png'),
        },
        {
            id: 3,
            title: 'Fresh Organic Fruits Basket',
            imageLink: require('../../../assets/Categories/fruits.png'),
        },
        {
            id: 4,
            title: 'Herbal Green Mix Plant',
            imageLink: require('../../../assets/Categories/herball.png'),
        },
    ]

    return (
        <View>
            <View className='py-5 flex flex-row items-center justify-between'>
                <Text className='text-2xl font-semibold text-neutral-700'>Popular Products</Text>
                <Pressable><Text className='text-neutral-700'>See More</Text></Pressable>
            </View>
            <View>
            </View>
            <View className='flex flex-row flex-wrap justify-between py-2'>
                {
                    popularProductsData?.map((item: ProductCardProps) => {
                        return (
                            <View key={item?.id} className="w-[48%] mb-3 flex flex-col items-center justify-center h-24 bg-gray-200 rounded-2xl">
                                <View className="w-full flex flex-row items-center justify-between px-2">
                                    <View className="w-1/2">
                                        <Text numberOfLines={2} className="text-xl leading-7 pl-3 font-semibold">
                                            {item?.title}
                                        </Text>
                                    </View>
                                    <View className="w-[40%]">
                                        <Image source={item?.imageLink} className="h-full w-full" resizeMode="cover" />
                                    </View>
                                </View>
                            </View>
                        )
                    })
                }
            </View>
        </View>
    )
}

export default PopularProducts