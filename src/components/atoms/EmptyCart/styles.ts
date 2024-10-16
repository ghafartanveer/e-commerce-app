import { StyleSheet, Dimensions } from "react-native";
import { colors } from "@constants/colors";

export const styles = StyleSheet.create({
  emptyList: {
    justifyContent: "center",
    alignItems: "center",
    height: Dimensions.get('screen').height / 1.7
  },
  emptyListText: {
    color: colors.disabled,
    fontSize: 18,
  },
});
