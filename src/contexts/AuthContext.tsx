import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
} from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { auth } from '../../firebaseConfig';
import { Alert } from 'react-native';

interface AuthContextData {
  signIn: (email: string, password: string) => Promise<any>;
  signUp: (email: string, password: string) => Promise<any>;
  forgotPassword: (email: string) => Promise<any>;
  signOutService: () => void;
  user: object | null;
  loadingAuth: boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

type ContainerProps = {
  children: React.ReactNode;
};
export const AuthProvider = (props: ContainerProps) => {
  const [user, setUser] = useState<any>();
  const [loadingAuth, setLoadingAuth] = useState<boolean>(false);

  useEffect(() => {
    onAuthStateChanged(getAuth(), (userInfo) => {
      setUser(userInfo);
    });
  }, []);

  async function signIn(email: string, password: string) {
    setLoadingAuth(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        setUser(user);
      })
      .catch((error) => {
        Alert.alert('Error', error.code);
      })
      .finally(() => {
        setLoadingAuth(false);
      });
  }
  async function signUp(email: string, password: string) {
    setLoadingAuth(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        setUser(user);
      })
      .catch((error) => {
        Alert.alert('Error', error.code);
      })
      .finally(() => {
        setLoadingAuth(false);
      });
  }

  async function signOutService() {
    signOut(auth);
    setUser(null);
  }

  async function forgotPassword(email: string) {
    setLoadingAuth(true);

    sendPasswordResetEmail(auth, email)
      .then(() => {
        Alert.alert('Ok', 'Email sent');
      })
      .catch((error) => {
        Alert.alert('Error', error.code);
      })
      .finally(() => {
        setLoadingAuth(false);
      });
  }

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOutService,
        user,
        loadingAuth,
        signUp,
        forgotPassword,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
