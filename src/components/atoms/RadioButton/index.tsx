import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./styles";
import { RadioButtonProps } from "@types";

 const RadioButton: React.FC<RadioButtonProps> = ({
  value,
  selected,
  onPress,
  label,
}) => (
  <TouchableOpacity
    style={styles.radioButtonContainer}
    activeOpacity={0.5}
    onPress={() => onPress(value)}
  >
    <View
      style={[
        styles.radioButton,
        selected === value && styles.radioButtonSelected,
      ]}
    />
    <Text style={styles.radioLabel}>{label}</Text>
  </TouchableOpacity>
);
export default RadioButton