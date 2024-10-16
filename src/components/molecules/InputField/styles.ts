import { StyleSheet } from "react-native";
import { colors } from "@constants/colors";
import { globalStyles } from "@constants/globalStyles";

export const styles = StyleSheet.create({
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
})