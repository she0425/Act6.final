import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { AppContext } from './AppContext';
import { globalStyles } from './globalStyles';

export default function HomeScreen({ navigation }) {
  const { recipes, toggleRecipe, isLoading } = useContext(AppContext);

  return (
    <ScrollView contentContainerStyle={globalStyles.container}>
      <Text style={globalStyles.title}>Recipe Catalog (Tab 1)</Text>

      {isLoading && (
        <Text style={{ color: '#007AFF', fontStyle: 'italic' }}>Saving...</Text>
      )}

      {recipes.map(recipe => (
        <View key={recipe.id} style={globalStyles.box}>
          <Text style={globalStyles.text}>{recipe.title}</Text>
          <Text style={{ color: recipe.saved ? 'green' : 'gray', marginVertical: 5 }}>
            {recipe.saved ? '★ Saved to Favorites' : '☆ Not Saved'}
          </Text>
          <TouchableOpacity
            style={globalStyles.button}
            onPress={() => toggleRecipe(recipe.id)}
          >
            <Text style={globalStyles.buttonText}>
              {recipe.saved ? 'Remove Favorite' : 'Save Favorite'}
            </Text>
          </TouchableOpacity>
        </View>
      ))}

      <TouchableOpacity
        style={[globalStyles.button, { backgroundColor: '#34C759', marginTop: 15 }]}
        onPress={() => navigation.navigate('ScreenTwo')}
      >
        <Text style={globalStyles.buttonText}>Go to Favorites (Screen 2)</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}