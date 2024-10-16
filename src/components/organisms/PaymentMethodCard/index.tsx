import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { RadioButton } from "@components/atoms";
import i18n from "@constants/strings";
import { PaymentMethodCardProps } from "@types";

const PaymentMethodCard: React.FC<PaymentMethodCardProps> = ({
  paymentMethod,
  setPaymentMethod,
}) => {
  return (
    <View style={styles.summaryCard}>
      <Text style={styles.paymentTitle}>{i18n.t("selectPayment")}</Text>
      {[i18n.t("creditCard"), i18n.t("cod")].map((method, index) => (
        <RadioButton
          key={index}
          value={method.toLowerCase().replace(/\s+/g, "")}
          selected={paymentMethod}
          onPress={setPaymentMethod}
          label={method}
        />
      ))}
    </View>
  );
};
export default PaymentMethodCard;
