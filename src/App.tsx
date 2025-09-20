import React from 'react'
import GetStartedScreen from './screens/Home/GetStarted'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './screens/Auth/Login';
import Signup from './screens/Auth/Signup';
import ForgotPassword from './screens/Auth/ForgotPassword';
import TermsCondition from './screens/Terms&Conditions/TermsCondition';

export type RootStackParamList = {
  GetStartedScreen: undefined;
  LoginScreen: undefined;
  SignupScreen: undefined;
  ForgotPasswordScreen: undefined;
  TermsConditionScreen: undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='GetStartedScreen' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='GetStartedScreen' component={GetStartedScreen} />
        <Stack.Screen name='LoginScreen' component={Login} />
        <Stack.Screen name='SignupScreen' component={Signup} />
        <Stack.Screen name='ForgotPasswordScreen' component={ForgotPassword} />
        <Stack.Screen name='TermsConditionScreen' component={TermsCondition} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App