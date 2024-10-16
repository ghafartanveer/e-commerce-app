import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@redux/store";
import { decrementQuantity, incrementQuantity } from "@redux/cartSlice";
import { StarShip } from "@types";

interface QuantitySelectorProps {
  item: StarShip;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({ item }) => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const itemExist = cartItems.find((i: StarShip) => i.id === item.url);
  const removeItem = () => {
    dispatch(decrementQuantity(item.url));
  };

  const addItem = () => {
    let obj = {
      ...item,
      id: item.url,
      quantity: 1,
      cost_in_credits:
        typeof item.cost_in_credits == "string"
          ? 1000000
          : item.cost_in_credits,
    };
    dispatch(incrementQuantity(obj));
  };

  return (
    <View style={styles.buttons}>
      <TouchableOpacity style={styles.button} onPress={removeItem}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
      <Text style={styles.quantityText}>{itemExist.quantity}</Text>
      <TouchableOpacity style={styles.button} onPress={addItem}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default QuantitySelector;
