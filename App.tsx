import './firebaseConfig';

import { StatusBar } from 'react-native';
import { Routes } from './src/routes/routes';
import { AuthProvider } from './src/contexts/AuthContext';

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
    </>
  );
}
