import { StyleSheet } from "react-native";
import { colors } from "@constants/colors";

export const styles = StyleSheet.create({
  btnText: {
    fontSize: 14,
    color: colors.textLight,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "60%",
    alignSelf: "center",
  },
  button: {
    backgroundColor: colors.iOSBlue,
    height: 22,
    width: 22,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: colors.textLight,
    fontWeight: "bold",
  },
  quantityText: { fontSize: 14, color: colors.textDark },
});
