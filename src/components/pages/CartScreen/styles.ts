import { StyleSheet } from "react-native";
import { colors } from "@constants/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.textLight,
  },
  listContainer: {
    paddingVertical: 20,
    flex:1
  },
  headerContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.textDark,
  },
  emptyList: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyCartText: {
    color: colors.disabled,
    fontSize: 18,
  },
  disabled: { backgroundColor: colors.disabled },
});
