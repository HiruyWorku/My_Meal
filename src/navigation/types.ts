import { IProduct } from "../components/cards/ProductCard";

export type RootStackParamList = {
  AuthStack: undefined;
  MainAppBottomTabs: undefined;
  ProductDetail: { product: IProduct };
  CartScreen: { refresh: number };
};
