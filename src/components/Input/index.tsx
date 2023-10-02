import React from 'react';
import {
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';
import { styles } from './styles';
import { COLORS } from '../../utils/colors';

import { Ionicons } from '@expo/vector-icons';

type IProps = TextInputProps & {
  placeholder?: string;
  password?: boolean;
  secureTextEntry?: boolean;
  setHidePass?: () => void;
  type?: any;
};
export function Input({
  placeholder,
  password,
  secureTextEntry,
  type = 'none',
  setHidePass,
  ...rest
}: IProps) {
  return (
    <View style={styles.container}>
      <View style={styles.inputArea}>
        <TextInput
          style={styles.textInput}
          placeholderTextColor={COLORS.gray300}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          autoCapitalize='none'
          inputMode={type}
          {...rest}
        />
        {password && (
          <TouchableOpacity
            style={styles.icon}
            activeOpacity={0.8}
            onPress={() => setHidePass()}
          >
            <Ionicons
              name={secureTextEntry ? 'eye' : 'eye-off'}
              size={24}
              color={COLORS.gray300}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
