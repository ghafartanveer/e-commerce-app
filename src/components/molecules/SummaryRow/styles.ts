import { colors } from "@constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  rowView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
    paddingHorizontal: 5,
  },
  summaryText: {
    fontSize: 14,
    fontWeight: "700",
    color: colors.textDark,
  },
  priceText: {
    fontSize: 14,
    fontWeight: "700",
    color: colors.accent,
  },
});
