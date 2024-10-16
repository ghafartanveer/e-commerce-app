import { colors } from "@constants/colors";
import { globalStyles } from "@constants/globalStyles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  paymentTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 10,
  },
  summaryCard: {
    backgroundColor: colors.textLight,
    padding: 10,
    width: "90%",
    alignSelf: "center",
    borderRadius: 10,
    marginBottom: 20,
    ...globalStyles.shadow,
  },
});
