import { StyleSheet } from 'react-native'
import { COLORS } from '../../utils/colors'


export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    width: "100%",
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: 56,
    width: "100%",
    backgroundColor: COLORS.blue,

  },
  title: {
    fontSize: 16,
    color: COLORS.white,
    fontWeight: "bold",
  }
})