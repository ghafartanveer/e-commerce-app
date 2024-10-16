import { View, Text } from "react-native";
import React from "react";
import { styles } from "./styles";
import { SummaryRowProps } from "@types";

const SummaryRow: React.FC<SummaryRowProps> = ({ label, value, isPrice }) => (
  <View style={styles.rowView}>
    <Text style={styles.summaryText}>{label}:</Text>
    <Text style={isPrice ? styles.priceText : styles.summaryText}>{value}</Text>
  </View>
);

export default SummaryRow;
