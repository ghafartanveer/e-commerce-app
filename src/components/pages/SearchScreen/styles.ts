import { StyleSheet } from "react-native";
import { colors } from "@constants/colors";
import { globalStyles } from "@constants/globalStyles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.textLight,
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    flex:1
  },
  columnWrapper: {
    justifyContent: "space-between",
  },
  input: {
    borderColor: colors.textDark,
    marginVertical: 10,
    width: "90%",
    alignSelf: "center",
    padding: 10,
    borderRadius: 20,
    backgroundColor: colors.textLight,
    ...globalStyles.shadow,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.textDark,
  },
  emptyList: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyListText: {
    color: colors.disabled,
    fontSize: 18,
  },
});
