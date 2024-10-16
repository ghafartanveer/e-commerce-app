import { colors } from "@constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  placeOrderBtn: {
    alignSelf: "center",
    backgroundColor: colors.iOSBlue,
    paddingVertical: 15,
    borderRadius: 15,
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 10,
  },
  placeOrderText: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.textLight,
  },
});
