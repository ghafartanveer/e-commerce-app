import { strings } from "@constants/strings";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, CartState } from "@types";
import { I18n } from "i18n-js";
import { Alert } from "react-native";

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
};
const i18n = new I18n(strings);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        if (existingItem.quantity >= 10) {
          Alert.alert("", i18n.t("maximumQuantity"));
          return;
        }
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
      state.totalQuantity += action.payload.quantity;
    },
    incrementQuantity: (state, action: PayloadAction<CartItem>) => {
      let id = action.payload.id;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        if (item.quantity >= 10) {
          Alert.alert("", i18n.t("maximumQuantity"));
          return;
        }
        item.quantity += 1;
        state.totalQuantity += 1;
      } else {
        state.items.push(action.payload);
        state.totalQuantity += action.payload.quantity;
      }
    },
    decrementQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.totalQuantity -= 1;
      } else if (item && item.quantity === 1) {
        state.items = state.items.filter((i) => i.id !== action.payload);
        state.totalQuantity -= 1;
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload
      );
      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.items = state.items.filter((item) => item.id !== action.payload);
      }
    },
    emptyCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
    },
  },
});

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  emptyCart,
} = cartSlice.actions;
export default cartSlice.reducer;
