import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { s, vs } from "react-native-size-matters";
import { AppColors } from "../../styles/colors";
import AppText from "../texts/AppText";
import { Ionicons } from "@expo/vector-icons";
import { commonStyle } from "../../styles/sharedStyles";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/types"; 
import { addToCart } from "../../data/cartStore"; // ✅ FIXED

export interface IProduct {
  id: number;
  title: string;
  imageURL: string;
  author: string;
  authorImage: string;
  difficulty: string;
  calories: number;
  ingredients: string[];
  nutrition: string[];
  cooking: string[];
  dietaryRestriction: string;
}

interface IProductCardProps {
  product: IProduct;
  onAddToCartPress: () => void; // <-- ADD THIS
}

const ProductCard: React.FC<IProductCardProps> = ({ product }) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleCardPress = () => {
    navigation.navigate("ProductDetail", { product });
  };

  const handleAddToCartPress = () => {
    addToCart(product.ingredients);
    navigation.navigate('CartScreen', { refresh: Math.random() }); // force it to reload
  };

  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity
        style={StyleSheet.absoluteFill}
        onPress={handleCardPress}
        activeOpacity={0.9}
      >
        <Image style={styles.image} source={{ uri: product.imageURL }} />
        <View style={styles.overlay}>
          <AppText style={styles.titleText}>{product.title}</AppText>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCartPress}>
        <Ionicons name="cart" size={s(22)} color={AppColors.white} />
      </TouchableOpacity>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  cardContainer: {
    width: s(160),
    height: vs(190),
    backgroundColor: AppColors.white,
    borderRadius: s(10),
    margin: s(5),
    overflow: "hidden",
    ...commonStyle.shadow,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    color: AppColors.white,
    fontSize: s(16),
    fontWeight: "bold",
    textAlign: "center",
    paddingHorizontal: s(6),
  },
  addToCartButton: {
    height: s(35),
    width: s(35),
    position: "absolute",
    left: 5,
    top: 5,
    borderRadius: s(17),
    backgroundColor: AppColors.primaryColor,
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
