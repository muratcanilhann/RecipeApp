// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Meals from './src/pages/meals/Meals';
import Categories from './src/pages/categories/Categories';
import MealDetailPage from "./src/pages/mealDetail/MealDetail";



const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="Meals" component={Meals} />
      <Stack.Screen name="MealDetail" component={MealDetailPage} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}