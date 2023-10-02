import './src/utils/firebase';
import { StatusBar } from 'react-native';
import { Home } from './src/screens/Home';
import Login from './src/screens/Login';

import * as WebBrowser from 'expo-web-browser';
import { useEffect, useState } from 'react';
import { Routes } from './src/routes/routes';
import { AuthProvider } from './src/contexts/AuthContext';

WebBrowser.maybeCompleteAuthSession();
export default function App() {
  return (
    <>
      <StatusBar
        barStyle='light-content'
        backgroundColor={'transparent'}
        translucent
      />
      <AuthProvider>
        <Routes />
      </AuthProvider>
      {/* <Home /> */}
    </>
  );
}
