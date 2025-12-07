import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { exercises } from '../data/exercises';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FlatList
        data={exercises}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('ExerciseDetail', { exercise: item })}>
            <Text style={{ fontSize: 18, marginVertical: 10 }}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity onPress={() => navigation.navigate('AddExercise')} style={{ marginTop: 20 }}>
        <Text style={{ color: 'blue' }}>Add New Exercise</Text>
      </TouchableOpacity>
    </View>
  );
}
