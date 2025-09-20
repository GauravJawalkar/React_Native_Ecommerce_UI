import { Text } from 'react-native'
import React from 'react'

const Button = ({ name }: { name: string }) => {
    return (
        <Text className='bg-green-800/80 py-3 rounded-lg'>
            <Text className='text-center font-bold text-white text-xl'>
                {name}
            </Text>
        </Text>
    )
}

export default Button