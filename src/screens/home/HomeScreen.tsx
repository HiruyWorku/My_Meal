import { FlatList, StyleSheet } from "react-native";
import React from "react";
import AppSaveView from "../../components/views/AppSaveView";
import HomeHeader from "../../components/headers/HomeHeader";
import ProductCard from "../../components/cards/ProductCard";
import foodItems, { IProduct } from "../../data/products";
import { s, vs } from "react-native-size-matters";


const HomeScreen = () => {
  return (
    <AppSaveView>
      <HomeHeader />
      <FlatList<IProduct>
        numColumns={2}
        data={foodItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onAddToCartPress={() => {
              console.log("Add to cart:", item);
            }}
          />
        )}
        columnWrapperStyle={{
          justifyContent: "space-between",
          marginBottom: vs(10),
        }}
        contentContainerStyle={{
          paddingHorizontal: s(5),
        }}
      />
    </AppSaveView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

