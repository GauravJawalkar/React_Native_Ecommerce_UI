import { View, Text } from 'react-native'
import React from 'react'

const Title = ({ title }: { title: string }) => {
    return (
        <View>
            <Text className='font-bold text-3xl py-2'>{title}</Text>
        </View>
    )
}

export default Title