import { TextInputProps } from "react-native";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";

// Models
export interface StarShip {
  id: string;
  MGLT: string;
  cargo_capacity: string;
  consumables: string;
  cost_in_credits: string;
  created: Date;
  crew: string;
  edited: Date;
  films: string[];
  hyperdrive_rating: string;
  length: string;
  manufacturer: string;
  max_atmosphering_speed: string;
  model: string;
  name: string;
  passengers: string;
  pilots: any[];
  starship_class: string;
  url: string;
  quantity: number;
}
export interface UseGetStarShipsResult {
  starShips: StarShip[];
  loading: boolean;
  error: string;
  refetch: (loading: boolean) => void;
}
export type TabParamList = {
  Home: undefined;
  Search: undefined;
  Cart: undefined;
};
export interface CartItem {
  id: string | undefined;
  quantity: number;
  cost_in_credits: number;
  [key: string]: any;
}
export interface CartState {
  items: CartItem[];
  totalQuantity: number;
}
export interface HeaderProps {
  title?: string;
}

// Props
export interface SearchScreenProps {
  navigation: {
    navigate: (screen: string) => void;
  };
}
export interface ItemCardProps {
  item: StarShip;
}
export interface FloatingCartButtonProps {
  onPress: () => void;
}
export interface ListFooterComponentProps {
  handlePlaceOrder: () => void;
}
export interface SummaryRowProps {
  label: string;
  value: string | number;
  isPrice?: boolean;
}
export interface RadioButtonProps {
  value: string | number;
  selected: string | number;
  onPress: (value: any) => void;
  label: string;
}
export interface EmptyCartMessageProps {
  icon: string;
  IconType: any;
}
export interface HomeScreenProps {
  navigation: NativeStackNavigationProp<TabParamList, "Home">;
}
export interface InputProps extends TextInputProps {
  query: string;
  setQuery: (text: string) => void;
}
export interface ButtonProps {
  disabled: boolean;
  onPress: () => void;
  title: string;
  customStyles?: any;
}
export interface StarshipListProps {
  starShips: StarShip[];
}
export interface StarshipListProps {
  starShips: StarShip[];
  loading: boolean;
  onRefresh: () => {};
  refreshing: boolean;
}
export interface SearchStarshipListProps {
  starShips: StarShip[];
  loading: boolean;
  query: string;
}
export interface CartStarshipListProps {
  cartItems: StarShip[];
  handlePlaceOrder: () => void;
}
export interface SummaryCardProps {
  paymentMethod: string;
}
export interface RemoveFromCartButtonProps {
  itemId: string;
}
export interface PaymentMethodCardProps {
  paymentMethod: string;
  setPaymentMethod: (value: string) => void;
}
