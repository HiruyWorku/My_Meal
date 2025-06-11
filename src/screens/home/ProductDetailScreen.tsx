// screens/home/ProductDetailScreen.tsx

import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import RecipeSection from '../../components/sections/RecipeSection';
import { Platform, StatusBar } from 'react-native';

type Product = {
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
};

type ProductDetailRouteProp = RouteProp<{ params: { product: Product } }, 'params'>;

const authorImages: Record<string, any> = {
  "cam.jpg": require("../../data/authorsImages/cam.jpg"),
  "miles.jpg": require("../../data/authorsImages/miles.jpg"),
  "ru.jpg": require("../../data/authorsImages/ru.jpg"),
};

// Global in-memory store for comments
const commentsStore: { [productId: number]: string[] } = {};

const ProductDetailScreen = () => {
  const route = useRoute<ProductDetailRouteProp>();
  const { product } = route.params;
  const navigation = useNavigation();

  const [liked, setLiked] = useState(false);
  const [comment, setComment] = useState(''); // <-- keep this separately (for the input box)
  const [comments, setComments] = useState<string[]>(commentsStore[product.id] || []); // <-- load stored comments


  const handleLike = () => setLiked(!liked);

  const handleAddComment = () => {
    if (comment.trim()) {
      const updatedComments = [...comments, comment];
      setComments(updatedComments);
      commentsStore[product.id] = updatedComments; // Save it globally
      setComment('');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Back Button */}
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={28} color="black" />
        </TouchableOpacity>

        <View style={styles.header}>
        <Image
          source={authorImages[product.authorImage]}
          style={styles.avatar}
          />
          <View>
            <Text style={styles.username}>{product.author}</Text>
            <Text style={styles.level}>Top Level Chef</Text>
            <Text style={styles.calories}>
              Difficulty: {product.difficulty} | {product.calories} Cal | {product.dietaryRestriction}
            </Text>
          </View>
        </View>

        <Image source={{ uri: product.imageURL }} style={styles.image} />

        <TouchableOpacity onPress={handleLike} style={styles.heart}>
          <Ionicons
            name={liked ? 'heart' : 'heart-outline'}
            size={38}
            color={liked ? 'red' : 'black'}
          />
        </TouchableOpacity>

        <RecipeSection
        ingredients={product.ingredients}
        nutrition={product.nutrition}
        cooking={product.cooking}
        />
    

        <View style={styles.commentSection}>
          <TextInput
            style={styles.input}
            placeholder="Add A Comment"
            value={comment}
            onChangeText={setComment}
          />
          <TouchableOpacity onPress={handleAddComment}>
            <Ionicons name="chatbubble-ellipses-outline" size={28} color="black" />
          </TouchableOpacity>
        </View>

        <FlatList
          data={comments}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.commentBubble}>
              <Text>{item}</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFEFEF",
    paddingHorizontal: 16,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  container: {
    flex: 1,
    backgroundColor: '#FFECEC',
    padding: 10,
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    top: -5,
    left: 10,
    zIndex: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingTop: 35, // space below the back button
  },
  avatar: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
  username: { fontWeight: 'bold', fontSize: 16 },
  level: { fontSize: 12, color: 'gray' },
  calories: { fontSize: 12, color: '#8b0000' },
  image: { width: '100%', height: 250, borderRadius: 15 },
  heart: {
    position: 'absolute',
    right: 20,
    top: 300,
    backgroundColor: '#fff',
    borderRadius: 25,
    padding: 4,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  commentSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 10,
    marginRight: 10,
  },
  commentBubble: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginVertical: 4,
  },
});

export default ProductDetailScreen;

