import { StyleSheet } from "react-native";
import { colors } from "@constants/colors";
import { globalStyles } from "@constants/globalStyles";

export const styles = StyleSheet.create({
  cardView: {
    backgroundColor: colors.textLight,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    borderRadius: 10,
    alignSelf: "center",
    marginBottom: 20,
    ...globalStyles.shadow,
  },
  img: {
    width: "45%",
    height: 120,
    alignSelf: "center",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  carName: {
    fontSize: 14,
    fontWeight: "700",
    color: colors.textDark,
    marginBottom: 5,
  },
  carPriceText: {
    fontSize: 14,
    color: colors.accent,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    alignSelf: "flex-end",
    marginTop: 10,
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
  detailsView: { width: "50%", justifyContent: "center", paddingRight: 10 },
});
