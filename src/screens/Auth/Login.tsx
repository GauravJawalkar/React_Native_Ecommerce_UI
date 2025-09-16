import { View, Text, TouchableOpacity, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../App'
import { ArrowLeft, Eye, EyeOff } from 'lucide-react-native'
import GoogleIcon from '../../components/Icons/GoogleIcon'
import AppleIcon from '../../components/Icons/AppleIcon'

type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>

const Login = ({ navigation }: LoginScreenProps) => {
    const [showPassword, setShowPassword] = useState(true)
    const handelShowPassword = () => {
        setShowPassword((prev) => !prev);
    }
    return (
        <SafeAreaView className='p-5'>
            <View>
                <View className='pt-5'>
                    <Pressable onPress={() => navigation.navigate('GetStartedScreen')}>
                        <ArrowLeft size={25} />
                    </Pressable>
                </View>
                <View className='py-10'>
                    <Text className='font-bold text-3xl pb-2'>Welcome Back 👋</Text>
                    <Text className='text-gray-500'>Login In Your Account</Text>
                </View>
                <View className='flex flex-col gap-4'>
                    <View>
                        <Text className='text-lg font-semibold'>Email</Text>
                        <TextInput className='bg-gray-200 p-4 my-2 rounded-lg' placeholder='Enter Your Email' keyboardType='email-address' />
                    </View>
                    <View>
                        <Text className='text-lg font-semibold'>Password</Text>
                        <View className='relative'>
                            <TextInput className='bg-gray-200 p-4 my-2 rounded-lg' placeholder='Enter Your Password'
                                secureTextEntry={showPassword} />
                            <Pressable onPress={handelShowPassword} className='w-fit absolute right-4 top-1/2 -translate-x-1/2 -translate-y-1/2 '>
                                {showPassword ? <EyeOff /> : <Eye />}
                            </Pressable>
                        </View>
                    </View>
                    <View>
                        <Pressable onPress={() => { navigation.navigate('ForgotPasswordScreen') }} ><Text className='font-bold text-green-800 text-lg'>Forgot Password?</Text></Pressable>
                    </View>
                    <View className='py-4'>
                        <TouchableOpacity className='bg-green-800/80 py-3 rounded-lg'>
                            <Text className='text-center font-bold text-white text-xl'>
                                Login
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View className='flex flex-row gap-1 items-center justify-center'>
                        <Text className='text-lg'>Don't have an account?</Text>
                        <Pressable onPress={() => navigation.navigate('SignupScreen')}>
                            <Text className='text-emerald-800 font-bold text-lg'>Sign Up</Text>
                        </Pressable>
                    </View>
                </View>
                <View className='py-7'>
                    <View className="flex-row items-center my-4">
                        <View className="flex-1 h-px bg-gray-300" />
                        <Text className="mx-4 text-gray-500">Or with</Text>
                        <View className="flex-1 h-px bg-gray-300" />
                    </View>
                </View>
                <View className='flex gap-2'>
                    <TouchableOpacity className='flex flex-row gap-4 items-center justify-center py-3 border border-gray-300 rounded-lg'>
                        <Text>
                            <GoogleIcon />
                        </Text>
                        <Text className='font-bold text-lg'>
                            Sign in with Google
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity className='flex flex-row gap-4 items-center justify-center py-3 border border-gray-300 rounded-lg'>
                        <Text>
                            <AppleIcon />
                        </Text>
                        <Text className='font-bold text-lg'>
                            Sign in with Google
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Login