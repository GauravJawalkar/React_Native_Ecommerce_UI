import { View, Text } from 'react-native'
import { TextInput } from 'react-native'
import { SearchIcon } from 'lucide-react-native'

const MainSearchBar = () => {
    return (
        <View className='relative'>
            <TextInput placeholder='Search any plant you want ?' className='bg-gray-100 py-4 px-12 rounded-full border border-gray-300 capitalize placeholder:font-normal placeholder:text-gray-500 antialiased' />
            <View className='absolute top-1/2  -translate-y-1/2 left-3'>
                <SearchIcon color={'gray'} />
            </View>
        </View>
    )
}

export default MainSearchBar