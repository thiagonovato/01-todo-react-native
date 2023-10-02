import React, { useContext, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';
import Logo from '../../assets/logo-home.png';
import { Input } from '../../components/Input';
import { ButtonGeneric } from '../../components/ButtonGeneric';
import AuthContext from '../../contexts/AuthContext';
import { useNavigation } from '@react-navigation/native';

export function SignIn() {
  const navigation = useNavigation();
  const { signIn, loadingAuth } = useContext(AuthContext);

  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [hidePass, setHidePass] = useState<boolean>(true);

  async function handleSignIn() {
    if (!email || !password) return;
    await signIn(email, password);
    setEmail('');
    setPassword('');
  }

  function handleCreateAccount() {
    navigation.navigate('signUp' as never);
  }
  function handleForgotPassword() {
    navigation.navigate('forgotPassword' as never);
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
        loading={loadingAuth}
      />
      <View style={styles.containerLink}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.buttonLink}
          onPress={handleCreateAccount}
        >
          <Text style={styles.textLink}>Create a new account</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.buttonLink}
          onPress={handleForgotPassword}
        >
          <Text style={styles.textLink}>Forgot password?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
