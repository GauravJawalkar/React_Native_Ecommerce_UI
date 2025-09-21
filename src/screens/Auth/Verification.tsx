import { View, Text, Pressable, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../App'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ArrowLeft } from 'lucide-react-native'
import Title from '../../components/Reusables/Title'
import Button from '../../components/Reusables/Button'

type VerificationscreenProps = NativeStackScreenProps<RootStackParamList, 'VerificationScreen'>

const Verification = ({ route, navigation }: VerificationscreenProps) => {
    console.log("The route data is : ", route?.params);
    const mode = route?.params?.verificationMode;
    return (
        <SafeAreaView className='p-5 flex-1 justify-between'>
            <View>
                <View className='pt-3'>
                    <Pressable onPress={() => navigation.navigate('ForgotPasswordScreen')}>
                        <ArrowLeft />
                    </Pressable>
                </View>
                <View className='py-10 flex items-center justify-center'>
                    <Title title={`Verification ${mode}`} />
                    <Text className='text-gray-500'>Please send the code we just send to your {mode}</Text>
                    <Text className='py-1 font-bold text-lg'>{mode === "Email" ? "gauravjawalkar8@gmail.com" : '8767677119'}</Text>
                </View>
                <View className="flex-row items-center w-full justify-center mb-8 gap-5">
                    <TextInput maxLength={1} className='h-16 rounded-xl w-16 bg-gray-200 focus:border focus:border-green-700 text-center text-2xl font-extrabold' keyboardType='number-pad' />
                    <TextInput maxLength={1} className='h-16 rounded-xl w-16 bg-gray-200 focus:border focus:border-green-700 text-center text-2xl font-extrabold' keyboardType='number-pad' />
                    <TextInput maxLength={1} className='h-16 rounded-xl w-16 bg-gray-200 focus:border focus:border-green-700 text-center text-2xl font-extrabold' keyboardType='number-pad' />
                    <TextInput maxLength={1} className='h-16 rounded-xl w-16 bg-gray-200 focus:border focus:border-green-700 text-center text-2xl font-extrabold' keyboardType='number-pad' />
                </View>
                <View className='flex items-center justify-center gap-2 flex-row'>
                    <Text className='text-gray-500'>If you didn't recieve the code?</Text><Pressable><Text className='font-bold text-green-800'>Resend</Text></Pressable>
                </View>
            </View>
            <View>
                <TouchableOpacity>
                    <Button name='Continue' />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Verification