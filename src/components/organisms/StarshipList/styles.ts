import { colors } from "@constants/colors";
import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.textLight,
  },
  loaderContainer: {
    height: Dimensions.get("screen").height / 1.7,
    justifyContent: "center",
    alignItems: "center",
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  columnWrapper: {
    justifyContent: "space-between",
  },
});
