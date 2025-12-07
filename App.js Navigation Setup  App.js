import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ExerciseDetailScreen from './screens/ExerciseDetailScreen';
import AddExerciseScreen from './screens/AddExerciseScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ExerciseDetail" component={ExerciseDetailScreen} />
        <Stack.Screen name="AddExercise" component={AddExerciseScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
