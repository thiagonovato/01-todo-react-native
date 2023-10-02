import { StyleSheet } from 'react-native';
import { COLORS } from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    marginTop: 30,
    backgroundColor: "transparent",
    alignItems: "center",
  },
  title: {
    color: COLORS.gray300,
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 16,
  },
  form: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
  },
  textInput: {
    width: "100%",
    backgroundColor: COLORS.gray500,
    height: 56,
    borderRadius: 5,
    color: COLORS.gray300,
    padding: 16,
    marginRight: 7,
    fontSize: 16,
    marginVertical: 7
  }
})