// components/sections/RecipeSection.tsx

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type Props = {
  ingredients: string[];
  nutrition: string[];
  cooking: string[];
};

const RecipeSection: React.FC<Props> = ({ ingredients, nutrition, cooking }) => {
  const [openSection, setOpenSection] = useState<null | 'Ingredients' | 'Nutrition' | 'Cooking'>(null);

  const toggleSection = (section: typeof openSection) => {
    setOpenSection(prev => (prev === section ? null : section));
  };

  const renderContent = () => {
    const content = openSection === 'Ingredients' ? ingredients :
                    openSection === 'Nutrition' ? nutrition :
                    openSection === 'Cooking' ? cooking : [];

    return content.map((item, index) => (
      <Text key={index} style={styles.contentItem}>{index + 1}. {item}</Text>
    ));
  };

  const renderToggle = (title: 'Ingredients' | 'Nutrition' | 'Cooking') => (
    <TouchableOpacity style={styles.toggleRow} onPress={() => toggleSection(title)}>
      <Text style={styles.toggleText}>{title}</Text>
      <Ionicons
        name={openSection === title ? 'chevron-up' : 'chevron-forward'}
        size={22}
        color="#6D2A2A"
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Recipe</Text>
      {renderToggle('Ingredients')}
      {openSection === 'Ingredients' && <View style={styles.contentBox}>{renderContent()}</View>}
      
      {renderToggle('Nutrition')}
      {openSection === 'Nutrition' && <View style={styles.contentBox}>{renderContent()}</View>}
      
      {renderToggle('Cooking')}
      {openSection === 'Cooking' && <View style={styles.contentBox}>{renderContent()}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#FADCDC',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginTop: 10,
    padding: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    alignSelf: 'center',
    color: '#6D2A2A',
    marginBottom: 8,
  },
  toggleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FCECEC',
    padding: 12,
    marginVertical: 4,
    borderRadius: 8,
  },
  toggleText: {
    fontSize: 18,
    color: '#6D2A2A',
  },
  contentBox: {
    backgroundColor: '#EDEDED',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  contentItem: {
    fontSize: 16,
    marginVertical: 2,
  },
});

export default RecipeSection;


