import { createContext, useState } from 'react';

interface AuthContextData {
  signIn: () => void;
  signOut: () => void;
  user: object | null;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

type ContainerProps = {
  children: React.ReactNode;
};
export const AuthProvider = (props: ContainerProps) => {
  const [user, setUser] = useState({});

  async function signIn() {
    console.log('Logando...');
    setUser({ name: 'Thiago' });
  }

  async function signOut() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ signIn, signOut, user }}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
