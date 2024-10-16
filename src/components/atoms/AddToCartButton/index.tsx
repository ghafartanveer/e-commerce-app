import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@redux/cartSlice";
import { ItemCardProps } from "@types";
import { styles } from "./styles";
import i18n from "@constants/strings";

const AddToCartButton: React.FC<ItemCardProps> = ({ item }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        ...item,
        id: item.url,
        name: item.name,
        price: 1000,
        quantity: 1,
        cost_in_credits:
          typeof item.cost_in_credits == "string"
            ? 1000000
            : item.cost_in_credits,
      })
    );
  };

  return (
    <TouchableOpacity
      style={styles.addBtn}
      activeOpacity={0.5}
      onPress={handleAddToCart}
    >
      <Text style={styles.btnText}>{i18n.t("addToCart")}</Text>
    </TouchableOpacity>
  );
};

export default AddToCartButton;
