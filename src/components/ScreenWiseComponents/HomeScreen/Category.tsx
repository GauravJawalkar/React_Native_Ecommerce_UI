import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'

interface CategoryItem {
    _id: number;
    category: string;
    imageLink: any;
}

const Category = () => {
    const categories = [
        {
            _id: 1,
            category: "indoor",
            imageLink: require("../../../assets/Categories/indoor.png"),
        },
        {
            _id: 2,
            category: "outdoor",
            imageLink: require("../../../assets/Categories/outdoor-plants.png"),
        },
        {
            _id: 3,
            category: "herbal",
            imageLink: require("../../../assets/Categories/herball.png"),
        },
        {
            _id: 4,
            category: "cactus",
            imageLink: require("../../../assets/Categories/cactusNew.png"),
        },
        {
            _id: 5,
            category: "fruit",
            imageLink: require("../../../assets/Categories/fruits.png"),
        },
        {
            _id: 6,
            category: "air purifying",
            imageLink: require("../../../assets/Categories/moneyFilter.png"),
        },
        {
            _id: 7,
            category: "climber",
            imageLink: require("../../../assets/Categories/climber.png"),
        },
    ];

    const particularCategory = ({ item, index }: { item: CategoryItem; index: number }) => {
        const isLast = index === categories?.length - 1;
        return (
            <TouchableOpacity className={`mr-4 ${isLast && 'pr-5'}`}>
                <View className='p-1 rounded-full bg-gray-300 w-fit'>
                    <Image source={item.imageLink} className='w-24 h-24 rounded-full' />
                </View>
                <Text className='text-base font-medium mt-1 capitalize text-center'>{item.category}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View className='py-3'>
            <Text className='text-2xl font-semibold text-black'>Category</Text>
            <View className='py-4'>
                <FlatList
                    className='pl-5 -mx-5'
                    data={categories}
                    horizontal
                    keyExtractor={item => item?._id.toString()}
                    renderItem={particularCategory}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </View>
    )
}

export default Category