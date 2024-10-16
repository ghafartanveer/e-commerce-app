import { StyleSheet } from "react-native";
import { colors } from "@constants/colors";

export const styles = StyleSheet.create({
  placeOrderBtn: {
    alignSelf: "center",
    backgroundColor: colors.iOSBlue,
    paddingVertical: 15,
    borderRadius: 15,
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
  },
  placeOrderText: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.textLight,
  },
  paymentTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 10,
  },
});
