import React from "react";
import { View, SafeAreaView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { emptyCart } from "@redux/cartSlice";
import { styles } from "./styles";
import i18n from "@constants/strings";
import { RootState } from "@redux/store";
import { Button, Header } from "@components/atoms";
import { CartStarshipList } from "@components/organisms";

const CartScreen: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalQuantity = useSelector(
    (state: RootState) => state.cart.totalQuantity
  );
  const dispatch = useDispatch();

  const handlePlaceOrder = () => {
    dispatch(emptyCart());
    alert(`${i18n.t("orderPlaceSuccess")}`);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Header title={i18n.t("myCart")} />
      <CartStarshipList
        cartItems={cartItems}
        handlePlaceOrder={handlePlaceOrder}
      />
      <Button
        title={i18n.t("placeOrder")}
        onPress={handlePlaceOrder}
        customStyles={totalQuantity == 0 && styles.disabled}
        disabled={totalQuantity == 0}
      />
    </View>
  );
};

export default CartScreen;
