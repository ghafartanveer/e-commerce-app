import { View, Text } from "react-native";
import React from "react";
import { SummaryRow } from "@components/molecules";
import { formatNumber } from "@constants/utils";
import i18n from "@constants/strings";
import { useSelector } from "react-redux";
import { RootState } from "@redux/store";
import { styles } from "./styles";
import { StarShip, SummaryCardProps } from "@types";

const SummaryCard: React.FC<SummaryCardProps> = ({ paymentMethod }) => {
  const totalQuantity = useSelector(
    (state: RootState) => state.cart.totalQuantity
  );
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const subtotal = cartItems.reduce((acc: number, ship: StarShip) => {
    const cost = ship?.cost_in_credits ? parseInt(ship.cost_in_credits, 10) : 0;
    return acc + cost * ship?.quantity;
  }, 0);

  const tax = subtotal * 0.02;
  const total = subtotal + tax;
  return (
    <View style={styles.summaryCard}>
      <Text style={styles.paymentTitle}>{i18n.t("orderSummary")}</Text>
      <SummaryRow label={i18n.t("totalQuantity")} value={totalQuantity} />
      <SummaryRow
        label={i18n.t("subTotal")}
        value={`${formatNumber(subtotal)} ${i18n.t("credits")}`}
        isPrice
      />
      <SummaryRow
        label={i18n.t("tax")}
        value={`${formatNumber(tax)} ${i18n.t("credits")}`}
        isPrice
      />
      {paymentMethod != `${i18n.t("_creditCard")}` && (
        <SummaryRow label={i18n.t("deliveryCharges")} value={i18n.t("free")} />
      )}
      <SummaryRow
        label={i18n.t("total")}
        value={`${formatNumber(total)} ${i18n.t("credits")}`}
        isPrice
      />
    </View>
  );
};

export default SummaryCard;
