import { StyleSheet } from 'react-native';
import { COLORS } from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    marginTop: -30,
    backgroundColor: "transparent"
  },
  form: {
    width: "100%",
    flexDirection: "row",
  },
  textInput: {
    flex: 1,
    backgroundColor: COLORS.gray500,
    height: 56,
    borderRadius: 5,
    color: COLORS.gray300,
    padding: 16,
    marginRight: 7,
    fontSize: 16
  }
})