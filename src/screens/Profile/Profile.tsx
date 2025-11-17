import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { logout } from '../../lib/redux/slices/authSlice'
import { useNavigation } from '@react-navigation/native'

const Profile = () => {
    const navigation = useNavigation<any>();
    return (
        <View>
            <Text>Profile</Text>
            <TouchableOpacity onPress={() => { logout }}>
                <Text>Logout</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate('LoginScreen') }}>
                <Text>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate('SignupScreen') }}>
                <Text>Signup</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Profile