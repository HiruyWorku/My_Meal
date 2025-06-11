import { StyleSheet, Text, View, FlatList, TouchableOpacity ,TextInput } from 'react-native';
import AppSaveView from '../../components/views/AppSaveView';
import HomeHeader from '../../components/headers/HomeHeader';
import { AppColors } from '../../styles/colors';
import { s, vs } from 'react-native-size-matters';
import React, { useState } from 'react';
import { cartStore } from '../../data/cartStore'; //already correct
import { useFocusEffect, useRoute } from '@react-navigation/native';
import { Ionicons } from "@expo/vector-icons";

console.log("cartStore contents:", cartStore);


const CartScreen = () => {
  const [refresh, setRefresh] = useState(false);
  const route = useRoute();
  const [newItem, setNewItem] = useState('');

  useFocusEffect(
    React.useCallback(() => {
      setRefresh((prev) => !prev);
    }, [route.params])
  );

  const toggleItemCrossed = (cartIndex: number, itemIndex: number) => {
    cartStore[cartIndex].items[itemIndex].crossed = !cartStore[cartIndex].items[itemIndex].crossed;
    setRefresh(!refresh); 
  };

  const handleAddManualItem = () => {
    if (newItem.trim() === '') return; 
  
    const newCart = {
      title: `Cart ${cartStore.length + 1}`,
      items: [{ name: newItem.trim(), crossed: false }],
    };
    cartStore.push(newCart);
    setNewItem('');
    setRefresh((prev) => !prev); 
  };

  const handleDeleteCart = (cartIndex: number) => {
    cartStore.splice(cartIndex, 1);
    setRefresh((prev) => !prev); 
  };

  const renderCart = ({ item: cart, index: cartIndex }: { item: any; index: number }) => (
    <View style={styles.cartContainer}>
      <View style={styles.cartHeader}>
        <Text style={styles.cartTitle}>{cart.title}</Text>
        <TouchableOpacity onPress={() => handleDeleteCart(cartIndex)} style={styles.deleteButton}>
          <Ionicons name="trash" size={20} color="white" />
        </TouchableOpacity>
      </View>
  
      {cart?.items?.map((item: any, itemIndex: number) => (
        <TouchableOpacity key={itemIndex} onPress={() => toggleItemCrossed(cartIndex, itemIndex)}>
          <Text style={[styles.cartItem, item.crossed && styles.crossedItem]}>
            {item.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <AppSaveView>
      <HomeHeader />
      <Text style={styles.header}>Grocery Lists</Text>
      <View style={styles.addItemContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add custom grocery item"
          placeholderTextColor="#aaa"
          value={newItem}
          onChangeText={setNewItem}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddManualItem}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={cartStore}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderCart}
        contentContainerStyle={{ paddingBottom: vs(50) }}
        ListEmptyComponent={() => (
          <Text style={styles.emptyCartText}>
            Your cart is empty. Add items to view them!
          </Text>
        )}
      />
    </AppSaveView>
  );
};


export default CartScreen;

const styles = StyleSheet.create({
  header: {
    fontSize: s(20),
    fontWeight: 'bold',
    color: AppColors.myMealcolor,
    textAlign: 'center',
    marginVertical: vs(15),
  },
  cartContainer: {
    marginHorizontal: s(16),
    marginBottom: vs(20),
    backgroundColor: AppColors.white,
    borderRadius: 10,
    padding: s(10),
    borderColor: AppColors.myMealcolor,
    borderWidth: 1,
  },
  cartTitle: {
    fontSize: s(18),
    fontWeight: '600',
    marginBottom: vs(10),
    color: AppColors.myMealcolor,
  },
  cartItem: {
    fontSize: s(16),
    color: AppColors.myMealcolor,
    marginVertical: vs(4),
  },
  crossedItem: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  addItemContainer: {
    flexDirection: 'row',
    marginHorizontal: s(16),
    marginBottom: vs(10),
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: AppColors.myMealcolor,
    borderRadius: 8,
    padding: s(10),
    marginRight: s(8),
    color: AppColors.myMealcolor,
  },
  addButton: {
    backgroundColor: AppColors.myMealcolor,
    paddingVertical: vs(10),
    paddingHorizontal: s(16),
    borderRadius: 8,
  },
  addButtonText: {
    color: AppColors.white,
    fontWeight: 'bold',
  },
  cartHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: vs(10),
  },  
  deleteButton: {
    backgroundColor: 'red',
    borderRadius: 5,
    padding: s(4),
    paddingHorizontal: s(8),
    paddingVertical: vs(4),
  },
  
  deleteButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: s(14),
  },
  emptyCartText: {
    fontSize: s(16),
    color: 'gray',
    textAlign: 'center',
    paddingHorizontal: s(20),
    marginTop: vs(100),  
  },
});
