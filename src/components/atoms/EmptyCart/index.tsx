import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { colors } from "@constants/colors";
import i18n from "@constants/strings";
import { EmptyCartMessageProps } from "@types";

 const EmptyCartMessage: React.FC<EmptyCartMessageProps> = ({ icon, IconType }) => {
  return (
    <View style={styles.emptyList}>
      <IconType name={icon} size={120} color={colors.disabled} />
      <Text style={styles.emptyListText}>
        {icon === i18n.t("searchIcon")
          ? i18n.t("searchForSarShips")
          : icon === i18n.t("emptyCartIcon")
          ? i18n.t("cartIsEmpty")
          : i18n.t("notFound")}
      </Text>
    </View>
  );
};

export default EmptyCartMessage
