import { ButtonProps } from "@types";
import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";

const Button: React.FC<ButtonProps> = ({
  disabled,
  onPress,
  title,
  customStyles,
}) => {
  return (
    <TouchableOpacity
      style={[styles.placeOrderBtn, customStyles]}
      activeOpacity={0.5}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.placeOrderText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
