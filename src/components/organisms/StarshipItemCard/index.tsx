import { View, Text, Image } from "react-native";
import React from "react";
import { styles } from "./styles";
import { useSelector } from "react-redux";
import i18n from "@constants/strings";
import { formatNumber } from "@constants/utils";
import { RootState } from "@redux/store";
import { urls } from "@network/endpoints";
import { ItemCardProps, StarShip } from "@types";
import { QuantitySelector } from "@components/molecules";
import { AddToCartButton } from "@components/atoms";

const StarshipItemCard: React.FC<ItemCardProps> = ({ item }) => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const itemExist = cartItems.find((i: StarShip) => i.id === item.url);

  return (
    <View style={styles.cardView}>
      <Image source={{ uri: urls.randomImageUrl }} style={styles.img} />
      <View style={{ marginHorizontal: 10 }}>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.carName}>
          {item.name}
        </Text>
        <Text style={styles.carPriceText}>
          {formatNumber(parseInt(item.cost_in_credits))} {i18n.t("credits")}
        </Text>
        {itemExist ? (
          <QuantitySelector item={item} />
        ) : (
          <AddToCartButton item={item} />
        )}
      </View>
    </View>
  );
};
export default StarshipItemCard;
