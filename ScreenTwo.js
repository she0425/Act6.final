import React, { useContext } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { AppContext } from './AppContext';
import { globalStyles } from './globalStyles';

export default function ScreenTwo() {
  const { recipes } = useContext(AppContext);
  const savedRecipes = recipes.filter(r => r.saved);

  return (
    <ScrollView contentContainerStyle={globalStyles.container}>
      <Text style={globalStyles.title}>Your Favorites (Tab 2)</Text>
      {savedRecipes.length === 0 ? (
        <Text style={globalStyles.text}>No favorite recipes saved yet.</Text>
      ) : (
        savedRecipes.map(recipe => (
          <View key={recipe.id} style={globalStyles.box}>
            <Text style={globalStyles.text}>{recipe.title}</Text>
          </View>
        ))
      )}
    </ScrollView>
  );
}