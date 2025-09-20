import { View, Text, Pressable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ArrowLeft, Mail, Phone } from 'lucide-react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../App'
import Title from '../../components/Reusables/Title'
import Button from '../../components/Reusables/Button'

type ForgotScreenProps = NativeStackScreenProps<RootStackParamList, 'ForgotPasswordScreen'>

const ForgotPassword = ({ navigation }: ForgotScreenProps) => {
    const [verificationMode, setVerificationMode] = useState("");
    return (
        <SafeAreaView className='p-5 flex-1 justify-between'>
            <View>
                {/* Back Button */}
                <View className='pt-3'>
                    <Pressable onPress={() => navigation.navigate('LoginScreen')}>
                        <ArrowLeft size={25} />
                    </Pressable>
                </View>
                {/* Title */}
                <View className='py-10'>
                    <Title title='Forgot Password' />
                    <Text className='text-gray-500 leading-6'>Select any one option below to use for resetting your password</Text>
                </View>
                {/* Main */}
                <View className='flex items-center justify-start gap-5 w-full pb-5'>
                    <Pressable onPress={() => setVerificationMode('Email')} className='w-full'>
                        <View className={`border border-lg p-5 ${verificationMode === "Email" ? 'border-green-700 rounded-xl ' : 'border-gray-300 rounded-xl '}`}>
                            <View className='flex items-center justify-start flex-row gap-4'>
                                <View className={`rounded-full p-4 bg-gray-200 w-fit border ${verificationMode === "Email" ? 'border-green-700' : 'border-gray-300'}`}>
                                    <Mail color={verificationMode === "Email" ? 'green' : 'gray'} />
                                </View>
                                <View>
                                    <Text className='font-bold text-lg'>Email</Text>
                                    <Text className='text-gray-500'>Send to your email</Text>
                                </View>
                            </View>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => setVerificationMode('Phone')} className='w-full'>
                        <View className={`border border-lg p-5 ${verificationMode === "Phone" ? 'border-green-700 rounded-xl ' : 'border-gray-300 rounded-xl '}`}>
                            <View className='flex items-center justify-start flex-row gap-4'>
                                <View className={`rounded-full p-4 bg-gray-200 w-fit border ${verificationMode === "Phone" ? 'border-green-700' : 'border-gray-300'}`}>
                                    <Phone color={verificationMode === "Phone" ? 'green' : 'gray'} />
                                </View>
                                <View>
                                    <Text className='font-bold text-lg'>Phone Number</Text>
                                    <Text className='text-gray-500'>Send to your phone number</Text>
                                </View>
                            </View>
                        </View>
                    </Pressable>
                </View>
            </View>
            <View className=''>
                {verificationMode.trim() != "" && <TouchableOpacity disabled={verificationMode.trim() == ""} onPress={() => navigation.navigate('VerificationScreen', { verificationMode: verificationMode })} activeOpacity={0.8}>
                    <Button name='Continue' />
                </TouchableOpacity>}
            </View>
        </SafeAreaView >
    )
}

export default ForgotPassword