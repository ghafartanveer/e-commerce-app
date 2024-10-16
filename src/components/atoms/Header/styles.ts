import { colors } from "@constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
});
