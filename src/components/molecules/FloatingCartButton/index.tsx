import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { styles } from "./styles";
import { RootState } from "@redux/store";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "@constants/colors";
import { FloatingCartButtonProps } from "@types";

 const FloatingCartButton: React.FC<FloatingCartButtonProps> = ({
  onPress,
}) => {
  const totalQuantity = useSelector(
    (state: RootState) => state.cart.totalQuantity
  );

  if (totalQuantity == 0) {
    return null;
  }

  return (
    <TouchableOpacity
      style={styles.floatingView}
      activeOpacity={0.5}
      onPress={onPress}
    >
      <View style={styles.quanView}>
        <Text style={styles.cartQuantityText}>{totalQuantity}</Text>
      </View>
      <Ionicons name={'cart'} size={30} color={colors.textLight} />
    </TouchableOpacity>
  );
};
export default FloatingCartButton
