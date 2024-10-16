import React, { useState } from "react";
import { View } from "react-native";
import i18n from "@constants/strings";
import { ListFooterComponentProps } from "@types";
import SummaryCard from "../../organisms/SummaryCard";
import { PaymentMethodCard } from "@components/organisms";

const ListFooterComponent: React.FC<ListFooterComponentProps> = () => {
  const [paymentMethod, setPaymentMethod] = useState<string>(
    `${i18n.t("_creditCard")}`
  );

  return (
    <View>
      <PaymentMethodCard
        paymentMethod={paymentMethod}
        setPaymentMethod={setPaymentMethod}
      />
      <SummaryCard paymentMethod={paymentMethod} />
    </View>
  );
};
export default ListFooterComponent;
