import { View, Text, Image } from "react-native";
import React from "react";
import { styles } from "./styles";
import i18n from "@constants/strings";
import { formatNumber } from "@constants/utils";
import { urls } from "@network/endpoints";
import { ItemCardProps } from "@types";
import { QuantitySelector } from "@components/molecules";
import { DeleteButton } from "@components/atoms";

const CartItemCard: React.FC<ItemCardProps> = ({ item }) => {
  return (
    <View style={styles.cardView}>
      <Image source={{ uri: urls.randomImageUrl }} style={styles.img} />
      <View style={styles.detailsView}>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.carName}>
          {item.name}
        </Text>

        <Text style={styles.carPriceText}>
          {formatNumber(parseInt(item.cost_in_credits))} {i18n.t("credits")}
        </Text>
        <Text numberOfLines={1} ellipsizeMode="tail">
          {i18n.t("starshipClass")}: {item.starship_class}
        </Text>
        <View style={styles.buttons}>
          <QuantitySelector item={item} />
          <DeleteButton itemId={item.id} />
        </View>
      </View>
    </View>
  );
};
export default CartItemCard;
