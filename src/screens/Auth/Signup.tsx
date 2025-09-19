import { View, Text, Pressable, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ArrowLeft, Eye, EyeOff } from 'lucide-react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../App'
import Title from '../../components/Reusables/Title'

type SignUpScreenProps = NativeStackScreenProps<RootStackParamList, 'SignupScreen'>

const Signup = ({ navigation }: SignUpScreenProps) => {
    const [showPassword, setShowPassword] = useState(true)
    const handelShowPassword = () => {
        setShowPassword((prev) => !prev);
    }
    return (
        <SafeAreaView className="flex-1 p-5 justify-between">
            {/* Top + Form */}
            <View>
                <View className="pt-3">
                    <Pressable onPress={() => navigation.navigate("LoginScreen")}>
                        <ArrowLeft size={25} />
                    </Pressable>
                </View>

                <View>
                    <View className="py-10">
                        <Title title="Sign Up" />
                        <Text className="text-gray-500 capitalize">
                            Create Your Account and Choose favourite plants
                        </Text>
                    </View>

                    <View className="flex flex-col gap-4">
                        {/* Name */}
                        <View>
                            <Text className="text-lg font-semibold">Name</Text>
                            <TextInput className="bg-gray-200 p-4 my-2 rounded-lg" placeholder="Enter Your Name" />
                        </View>

                        {/* Email */}
                        <View>
                            <Text className="text-lg font-semibold">Email</Text>
                            <TextInput className="bg-gray-200 p-4 my-2 rounded-lg" placeholder="Enter Your Email" keyboardType="email-address" />
                        </View>

                        {/* Password */}
                        <View>
                            <Text className="text-lg font-semibold">Password</Text>
                            <View className="relative">
                                <TextInput className="bg-gray-200 p-4 my-2 rounded-lg" placeholder="Enter Your Password" secureTextEntry={showPassword} />
                                <Pressable onPress={handelShowPassword} className="w-fit absolute right-4 top-1/2 -translate-x-1/2 -translate-y-1/2">
                                    {showPassword ? <EyeOff /> : <Eye />}
                                </Pressable>
                            </View>
                        </View>

                        {/* Register Button */}
                        <View className="py-4">
                            <TouchableOpacity className="bg-green-800/80 py-3 rounded-lg">
                                <Text className="text-center font-bold text-white text-xl">
                                    Register
                                </Text>
                            </TouchableOpacity>
                        </View>

                        {/* Already have account */}
                        <View className="flex flex-row gap-1 items-center justify-center">
                            <Text className="text-lg">Already have an account?</Text>
                            <Pressable onPress={() => navigation.navigate("LoginScreen")}>
                                <Text className="text-emerald-800 font-bold text-lg">Sign In</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </View>

            {/* Bottom Terms */}
            <View className="items-center">
                <Text>By registering here, you agree to our</Text>
                <Pressable onPress={() => navigation.navigate('TermsConditionScreen')}>
                    <Text className="font-bold text-lg text-green-900">
                        Terms and Policies
                    </Text>
                </Pressable>
            </View>
        </SafeAreaView>

    )
}

export default Signup