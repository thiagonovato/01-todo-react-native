import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles } from './styles';
import { COLORS } from '../../utils/colors';

type Props = {
  onPress: () => void;
  title: string;
  loading?: boolean;
};
export function ButtonGeneric({ onPress, title, loading }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.9}
        onPress={onPress}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color={COLORS.white} />
        ) : (
          <Text style={styles.title}>{title}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}
