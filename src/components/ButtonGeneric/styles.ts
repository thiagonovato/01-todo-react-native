import { StyleSheet } from 'react-native'
import { COLORS } from '../../utils/colors'


export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    height: 56,
    borderRadius: 5,
    backgroundColor: COLORS.blue,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 7
  },
  text: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: 'bold'
  },
  icon: {
    marginHorizontal: 7
  }
})