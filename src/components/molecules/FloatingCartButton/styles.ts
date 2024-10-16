import { StyleSheet } from "react-native";
import { colors } from "@constants/colors";
import { globalStyles } from "@constants/globalStyles";

export const styles = StyleSheet.create({
  floatingView: {
    position: "absolute",
    paddingVertical: 10,
    paddingHorizontal: 15,
    bottom: 50,
    right: 0,
    backgroundColor: colors.accent,
    borderRadius: 100,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
    ...globalStyles.shadow,
  },
  cartQuantityText: {
    color: colors.textLight,
    fontSize: 10,
    fontWeight: "bold",
  },
  quanView: {
    backgroundColor: colors.red,
    borderRadius: 20,
    paddingHorizontal: 5,
    height: 18,
    minWidth: 18,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    zIndex: 1,
    right: 5,
    top: 7,
  },
});
