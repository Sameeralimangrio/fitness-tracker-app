import React from 'react';
import { View, Text, Image } from 'react-native';

export default function ExerciseDetailScreen({ route }) {
  const { exercise } = route.params;
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{exercise.name}</Text>
      <Image source={{ uri: exercise.image }} style={{ width: '100%', height: 200, marginVertical: 20 }} />
      <Text style={{ fontSize: 16 }}>{exercise.description}</Text>
    </View>
  );
}
