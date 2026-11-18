import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { globalStyles } from './globalStyles';

export default function ScreenThree({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Settings / Info (Tab 3)</Text>
      <Text style={globalStyles.text}>Welcome to the multi-tab app settings.</Text>
      <TouchableOpacity
        style={globalStyles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={globalStyles.buttonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}