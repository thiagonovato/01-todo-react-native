import { StyleSheet } from 'react-native';
import { COLORS } from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.gray600,
  },
  image: {
    marginBottom: 30
  },
  containerLink: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 24
  },
  buttonLink: {
    padding: 10
  },
  textLink: {
    color: COLORS.gray300,
    fontSize: 16,
  }
})