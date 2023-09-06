import { StyleSheet } from 'react-native'
import { COLORS } from '../../utils/colors'

export const styles = StyleSheet.create({
  container: {
    padding: 24,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  topicContainer: {
    flexDirection: "row",
    alignItems: 'center'
  },
  topic: {
    color: COLORS.blue,
    fontSize: 20,
    fontWeight: "700",
    marginRight: 5
  },
  done: {
    color: COLORS.purple,
    fontSize: 20,
    fontWeight: "700",
    marginRight: 5
  },
  topicNumberBackground: {
    backgroundColor: COLORS.gray400,
    borderRadius: 50
  },
  topicNumber: {
    color: COLORS.gray200,
    padding: 3
  }
})