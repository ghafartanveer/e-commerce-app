import { StyleSheet } from "react-native";
import { colors } from "@constants/colors";
import { globalStyles } from "@constants/globalStyles";

export const styles = StyleSheet.create({
  cardView: {
    backgroundColor: colors.textLight,
    borderRadius: 10,
    width: "48%",
    marginTop: 20,
    paddingVertical: 10,
    ...globalStyles.shadow,
  },
  carName: {
    fontSize: 14,
    color: colors.textDark,
    marginBottom: 5,
  },
  carPriceText: {
    fontSize: 14,
    color: colors.accent,
    marginBottom:10
  },

  img: {
    width: "90%",
    height: 80,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignSelf: "center",
    marginBottom: 10,
  },

});
