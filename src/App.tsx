import React from 'react'
import GetStartedScreen from './screens/Home/GetStarted'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './screens/Auth/Login';
import Signup from './screens/Auth/Signup';
import ForgotPassword from './screens/Auth/ForgotPassword';

export type RootStackParamList = {
  GetStartedScreen: undefined;
  LoginScreen: undefined;
  SignupScreen: undefined;
  ForgotPasswordScreen: undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='GetStartedScreen'>
        <Stack.Screen name='GetStartedScreen' component={GetStartedScreen} options={{ headerShown: false }} />
        <Stack.Screen name='LoginScreen' component={Login} options={{ headerShown: false }} />
        <Stack.Screen name='SignupScreen' component={Signup} options={{ headerShown: false }} />
        <Stack.Screen name='ForgotPasswordScreen' component={ForgotPassword} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App