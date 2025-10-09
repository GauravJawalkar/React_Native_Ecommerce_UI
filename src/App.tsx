import React from 'react'
import GetStartedScreen from './screens/Home/GetStarted'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './screens/Auth/Login';
import Signup from './screens/Auth/Signup';
import ForgotPassword from './screens/Auth/ForgotPassword';
import TermsCondition from './screens/Terms&Conditions/TermsCondition';
import Verification from './screens/Auth/Verification';
import { Provider } from 'react-redux';
import { persistor, store } from './lib/redux/store';
import { ReactQueryProvider } from './lib/query/Provider';
import { PersistGate } from 'redux-persist/integration/react';
import BottomBarTab from './components/Navigation/BottomBarTab';


export type RootStackParamList = {
  GetStartedScreen: undefined;
  LoginScreen: undefined;
  SignupScreen: undefined;
  ForgotPasswordScreen: undefined;
  TermsConditionScreen: undefined;
  VerificationScreen: { verificationMode: string };
  MainHomeScreen: undefined;
  BottomBarTabs: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <ReactQueryProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName='MainHomeScreen' screenOptions={{ headerShown: false }}>
              <Stack.Screen name='GetStartedScreen' component={GetStartedScreen} />
              <Stack.Screen name='LoginScreen' component={Login} />
              <Stack.Screen name='SignupScreen' component={Signup} />
              <Stack.Screen name='ForgotPasswordScreen' component={ForgotPassword} />
              <Stack.Screen name='TermsConditionScreen' component={TermsCondition} />
              <Stack.Screen name='VerificationScreen' component={Verification} />
              <Stack.Screen name='MainHomeScreen' component={BottomBarTab} />
            </Stack.Navigator>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </ReactQueryProvider>
  )
}

export default App