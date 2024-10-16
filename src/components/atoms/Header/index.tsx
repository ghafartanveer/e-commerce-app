import { HeaderProps } from "@types";
import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

const Header: React.FC<HeaderProps> = ({ title }) => (
  <View style={styles.headerContainer}>
    <Text style={styles.headerText}>{title}</Text>
  </View>
);
export default Header;
