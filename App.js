import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppProvider } from './AppContext';

import HomeScreen from './HomeScreen';
import ScreenTwo from './ScreenTwo';
import ScreenThree from './ScreenThree';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Home">
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="ScreenTwo" component={ScreenTwo} />
          <Tab.Screen name="ScreenThree" component={ScreenThree} />
        </Tab.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}