import { View, Text, TouchableOpacity, TextInput, Pressable, StatusBar, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../App'
import { ArrowLeft, Eye, EyeOff } from 'lucide-react-native'
import GoogleIcon from '../../components/Icons/GoogleIcon'
import AppleIcon from '../../components/Icons/AppleIcon'
import Title from '../../components/Reusables/Title'
import Button from '../../components/Reusables/Button'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../lib/redux/slices/authSlice'
import { RootState } from '../../lib/redux/store'

type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>

const Login = ({ navigation }: LoginScreenProps) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(true);
    const dispatch = useDispatch();

    const handelShowPassword = () => {
        setShowPassword((prev) => !prev);
    }

    const handelLogin = () => {
        try {
            (email.trim() === "" || password.trim() === "") && Alert.alert("Bhai Chutiya Samja hai kya ?");
            const payload = { user: { email, password }, isLoggedIn: true };
            dispatch(login(payload));
            navigation.replace("GetStartedScreen");
        } catch (error) {
            console.error("Failed to login : ", error)
        }
    }
    return (
        <>
            <StatusBar className='bg-gray-100' barStyle={'dark-content'} />
            <SafeAreaView className='p-5'>
                <View>
                    <View className='pt-3'>
                        <Pressable onPress={() => navigation.navigate('GetStartedScreen')}>
                            <ArrowLeft size={25} />
                        </Pressable>
                    </View>
                    <View className='py-10'>
                        <Title title='Welcome Back 👋' />
                        <Text className='text-gray-500'>Login In Your Account</Text>
                    </View>
                    <View className='flex flex-col gap-4'>
                        <View>
                            <Text className='text-lg font-semibold'>Email</Text>
                            <TextInput value={email} onChangeText={text => setEmail(text)} autoCapitalize='none' className='bg-gray-200 p-4 my-2 rounded-lg' placeholder='Enter Your Email' keyboardType='email-address' />
                        </View>
                        <View>
                            <Text className='text-lg font-semibold'>Password</Text>
                            <View className='relative'>
                                <TextInput value={password} onChangeText={text => setPassword(text)} className='bg-gray-200 p-4 my-2 rounded-lg' placeholder='Enter Your Password'
                                    secureTextEntry={showPassword} />
                                <Pressable onPress={handelShowPassword} className='w-fit absolute right-0 top-1/2 -translate-x-1/2 -translate-y-1/2 '>
                                    {showPassword ? <EyeOff /> : <Eye />}
                                </Pressable>
                            </View>
                        </View>
                        <View>
                            <Pressable onPress={() => { navigation.navigate('ForgotPasswordScreen') }} ><Text className='font-bold text-green-800 text-lg'>Forgot Password?</Text></Pressable>
                        </View>
                        <View className='py-4'>
                            <TouchableOpacity disabled={email.trim() === "" || password.trim() === ""} className='disabled:opacity-70' onPress={handelLogin} activeOpacity={0.8}>
                                <Button name='Login' />
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
                        <TouchableOpacity activeOpacity={0.6} className='flex flex-row gap-4 items-center justify-center py-3 border border-gray-300 rounded-lg'>
                            <Text>
                                <GoogleIcon />
                            </Text>
                            <Text className='font-bold text-lg'>
                                Sign in with Google
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.6} className='flex flex-row gap-4 items-center justify-center py-3 border border-gray-300 rounded-lg'>
                            <Text>
                                <AppleIcon />
                            </Text>
                            <Text className='font-bold text-lg'>
                                Sign in with Apple
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </>
    )
}

export default Login