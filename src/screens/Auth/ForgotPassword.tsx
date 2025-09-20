import { View, Text, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ArrowLeft, Mail, Phone } from 'lucide-react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../App'
import Title from '../../components/Reusables/Title'
import Button from '../../components/Reusables/Button'

type ForgotScreenProps = NativeStackScreenProps<RootStackParamList, 'ForgotPasswordScreen'>

const ForgotPassword = ({ navigation }: ForgotScreenProps) => {
    return (
        <SafeAreaView className='p-5'>
            <View>
                <View className='pt-3'>
                    <Pressable onPress={() => navigation.navigate('LoginScreen')}>
                        <ArrowLeft size={25} />
                    </Pressable>
                </View>
                <View className='py-10'>
                    <Title title='Forgot Password' />
                    <Text className='text-gray-500'>Select any one option below to use for resetting your password</Text>
                </View>
                <View className='flex items-center justify-start gap-5 w-full'>
                    <View className='border border-lg p-5 rounded-lg border-green-700 w-full'>
                        <View className='flex items-center justify-start flex-row gap-4'>
                            <View className='rounded-full p-4 bg-gray-200 w-fit border border-gray-300'>
                                <Mail color={'green'} />
                            </View>
                            <View>
                                <Text className='font-bold text-lg'>Email</Text>
                                <Text className='text-gray-500'>Send to your email</Text>
                            </View>
                        </View>
                    </View>
                    <View className='border border-lg p-5 rounded-lg border-gray-300  w-full'>
                        <View className='flex items-center justify-start flex-row gap-4'>
                            <View className='rounded-full p-4 bg-gray-200 w-fit border border-gray-300'>
                                <Phone color={'green'} />
                            </View>
                            <View>
                                <Text className='font-bold text-lg'>Phone Number</Text>
                                <Text className='text-gray-500'>Send to your phone number</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View className='py-10'>
                    <TouchableOpacity activeOpacity={0.8}>
                        <Button name='Continue' />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default ForgotPassword