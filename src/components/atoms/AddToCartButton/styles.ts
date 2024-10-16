import { colors } from "@constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  addBtn: {
    alignSelf: "center",
    backgroundColor: colors.iOSBlue,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },
  btnText: {
    fontSize: 14,
    color: colors.textLight,
  },
});
