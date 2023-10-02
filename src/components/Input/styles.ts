import { StyleSheet } from 'react-native';
import { COLORS } from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    width: "100%",
    marginBottom: 20
  },
  inputArea: {
    flexDirection: "row",
    alignItems: 'center',
    backgroundColor: COLORS.gray500,
  },
  textInput: {
    height: 56,
    borderRadius: 5,
    color: COLORS.gray300,
    padding: 16,
    fontSize: 16,
    width: "90%"
  },
  icon: {
  }
})