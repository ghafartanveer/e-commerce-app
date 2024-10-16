import React from "react";
import { FlatList, View } from "react-native";
import { styles } from "./styles";
import i18n from "@constants/strings";
import { CartStarshipListProps } from "@types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { RootState } from "@redux/store";
import { EmptyCartMessage } from "@components/atoms";
import { ListFooterComponent } from "@components/templates";
import CartItemCard from "../CartItemCard";

const CartStarshipList: React.FC<CartStarshipListProps> = ({
  cartItems,
  handlePlaceOrder,
}) => {
  const totalQuantity = useSelector(
    (state: RootState) => state.cart.totalQuantity
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.created.toString()}
        renderItem={({ item }) => <CartItemCard item={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        ListFooterComponent={
          totalQuantity > 0 && (
            <ListFooterComponent handlePlaceOrder={handlePlaceOrder} />
          )
        }
        ListEmptyComponent={
          <EmptyCartMessage
            icon={i18n.t("emptyCartIcon")}
            IconType={MaterialCommunityIcons}
          />
        }
      />
    </View>
  );
};
export default CartStarshipList;
