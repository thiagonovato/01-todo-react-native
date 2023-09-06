import { StyleSheet } from 'react-native'
import { COLORS } from '../../utils/colors'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.gray500,
    borderWidth: 1,
    borderColor: COLORS.gray400,
    borderRadius: 5,
    padding: 12,
    alignItems: 'center',
    marginBottom: 10
  },
  checkbox: {
    borderRadius: 50,
  },
  text: {
    flex: 1,
    paddingHorizontal: 8,
    color: COLORS.gray100,
    fontSize: 14
  },
  icon: {
    color: COLORS.gray300
  }
})