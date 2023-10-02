import React, { useContext, useState } from 'react';
import { Image, Text, View } from 'react-native';

import { styles } from './styles';
import Logo from '../../assets/logo-home.png';
import { Input } from '../../components/Input';
import { ButtonGeneric } from '../../components/ButtonGeneric';
import AuthContext from '../../contexts/AuthContext';

export function SignIn() {
  const { signIn } = useContext(AuthContext);

  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [hidePass, setHidePass] = useState<boolean>(true);

  async function handleSignIn() {
    signIn();
  }

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.image} />
      <Input
        placeholder='Email'
        value={email}
        type={'email'}
        onChangeText={setEmail}
      />
      <Input
        placeholder='Password'
        value={password}
        onChangeText={setPassword}
        secureTextEntry={hidePass}
        password
        setHidePass={() => setHidePass(!hidePass)}
      />
      <ButtonGeneric
        title='Enter'
        onPress={() => handleSignIn()}
        loading={false}
      />
    </View>
  );
}
