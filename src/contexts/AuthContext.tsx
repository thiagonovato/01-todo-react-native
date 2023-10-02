import { createContext, useContext, useEffect, useState } from 'react';
import * as Google from 'expo-auth-session/providers/google';
import {
  GoogleAuthProvider,
  signInWithCredential,
  signOut,
  onAuthStateChanged,
  getAuth,
} from 'firebase/auth';
import { auth } from '../utils/firebase';

import { IOS_CLIENT_ID, ANDROID_CLIENT_ID } from '@env';

interface AuthContextData {
  user: any;
  promptAsync: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState({});
  const [request, response, promptAsync] = Google.useAuthRequest({
    iosClientId: IOS_CLIENT_ID,
    androidClientId: ANDROID_CLIENT_ID,
  });

  useEffect(() => {
    console.log('ENTROU', user);
    if (response?.type === 'success') {
      const credential = GoogleAuthProvider.credential(
        response.params.id_token
      );
      signInWithCredential(auth, credential).then((user) => {
        console.log('###', user);
        setUser(user);
      });
    }
  }, [response]);

  useEffect(() => {
    console.log('CHECOU...');
    console.log(auth);
    const subscribe = auth.onAuthStateChanged((userInfo) => {
      console.log('ACHOU', userInfo);
      setUser(userInfo);
    });
    return () => subscribe();
  }, []);

  async function logout() {
    console.log('Chamou...', user);
    signOut(auth);
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, promptAsync, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
