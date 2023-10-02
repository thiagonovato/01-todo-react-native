import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignIn } from '../screens/SignIn';
import { SignUp } from '../screens/SignUp';
import { ForgotPassword } from '../screens/ForgotPassword';

const { Navigator, Screen } = createNativeStackNavigator();
export function PublicStack() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name='signIn' component={SignIn} />
      <Screen name='signUp' component={SignUp} />
      <Screen name='forgotPassword' component={ForgotPassword} />
    </Navigator>
  );
}
