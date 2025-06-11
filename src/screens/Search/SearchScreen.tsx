import { Text, View, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import AppSaveView from '../../components/views/AppSaveView';
import HomeHeader from '../../components/headers/HomeHeader';
import AppTextInput from '../../components/inputs/AppTextinput';
import { sharedPaddingHorizontal } from '../../styles/sharedStyles';
import { s, vs } from 'react-native-size-matters';
import { AppColors } from '../../styles/colors';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import foodItems, { IProduct } from '../../data/products';
import { RootStackParamList } from '../../navigation/types';


const SearchScreen = () => {
  const [search, setSearch] = useState('');
  const [foundProducts, setFoundProducts] = useState<IProduct[]>([]);
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const [filters, setFilters] = useState({
    vegan: false,
    vegetarian: false,
    kosher: false,
    halal: false,
    carnivore: false,
    dairyFree: false,
    glutenFree: false,
    peanutFree: false,
  });

  const searchFoods = (text: string) => {
    setSearch(text);
    if (text.trim() === '') {
      setFoundProducts([]);
    } else {
      const matches = foodItems.filter((item) =>
        item.title.toLowerCase().includes(text.toLowerCase())
      );
      setFoundProducts(matches);
    }
  };


  
  const handleProductPress = (product: IProduct) => {
    navigation.navigate('ProductDetail', { product });
  };

  const toggleFilter = (key: keyof typeof filters) => {
    setFilters({ ...filters, [key]: !filters[key] });
  };

  return (
    <AppSaveView>
      <HomeHeader />

      <View style={styles.searchArea}>
        <TouchableOpacity onPress={() => setIsFilterVisible(!isFilterVisible)} style={styles.menuIcon}>
          <Feather name="menu" size={s(24)} color={AppColors.primaryColor} />
        </TouchableOpacity>

        <View style={styles.searchInputWrapper}>
          <Ionicons name="search" size={26} color="#999" style={styles.searchIconInside} />
          <AppTextInput
              placeholder="Search for dishes..."
              placeholderTextColor="#999"
              value={search}
              onChangeText={(text) => {
                searchFoods(text);
              }}
              style={styles.inputField}
              secureTextEntry={false}      
              keyboardType="default"         
            />
        </View>
      </View>

      {isFilterVisible && (
        <View style={styles.revealedBox}>
          {Object.entries(filters).map(([key, value]) => (
            <TouchableOpacity
              key={key}
              style={styles.checkboxItem}
              onPress={() => toggleFilter(key as keyof typeof filters)}
            >
              <Ionicons
                name={value ? 'checkbox' : 'square-outline'}
                size={24}
                color={AppColors.primaryColor}
              />
              <Text style={styles.checkboxText}>{key.charAt(0).toUpperCase() + key.slice(1)}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      <FlatList
        data={foundProducts}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.resultsContainer}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.resultItem} onPress={() => handleProductPress(item)}>
            <Image source={{ uri: item.imageURL }} style={styles.resultImage} />
            <Text style={styles.resultText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </AppSaveView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  searchArea: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: sharedPaddingHorizontal,
    marginTop: vs(20),
  },
  menuIcon: {
    marginRight: s(8),
  },
  searchInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'white',
    borderRadius: s(30),
    paddingHorizontal: s(10),
    paddingVertical: vs(5),
    elevation: 2,

  },
  searchIconInside: {
    marginRight: s(6),
  },
  inputField: {
    flex: 1,
    fontSize: s(14),
    color: 'black',
    marginTop: vs(11),
    
  },
  revealedBox: {
    marginTop: vs(10),
    marginHorizontal: sharedPaddingHorizontal,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: s(12),
    elevation: 2,
  },
  checkboxItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: vs(10),
  },
  checkboxText: {
    marginLeft: s(8),
    fontSize: s(14),
    color: 'black',
  },
  resultsContainer: {
    paddingTop: vs(20),
    paddingHorizontal: sharedPaddingHorizontal,
  },
  resultItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: vs(12),
    padding: s(10),
    elevation: 2,
  },
  resultImage: {
    width: s(50),
    height: s(50),
    borderRadius: 8,
    marginRight: s(10),
  },
  resultText: {
    fontSize: s(14),
    fontWeight: '600',
    color: AppColors.myMealcolor,
  },
});
