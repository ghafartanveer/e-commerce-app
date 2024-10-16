import { colors } from "@constants/colors";
import { removeFromCart } from "@redux/cartSlice";
import React from "react";
import { TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { MaterialIcons } from "@expo/vector-icons";
import { RemoveFromCartButtonProps } from "@types";

const DeleteButton: React.FC<RemoveFromCartButtonProps> = ({ itemId }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromCart(itemId));
  };

  return (
    <TouchableOpacity onPress={handleRemove}>
      <MaterialIcons name="delete" color={colors.red} size={25} />
    </TouchableOpacity>
  );
};

export default DeleteButton;
