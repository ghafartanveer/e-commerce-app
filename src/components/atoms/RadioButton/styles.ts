import { StyleSheet } from "react-native";
import { colors } from "@constants/colors";

export const styles = StyleSheet.create({
  radioButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  radioButton: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.iOSBlue,
    marginRight: 10,
  },
  radioButtonSelected: {
    backgroundColor: colors.iOSBlue,
  },
  radioLabel: {
    fontSize: 16,
  },
});
