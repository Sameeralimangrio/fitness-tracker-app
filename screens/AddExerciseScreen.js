import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

export default function AddExerciseScreen({ navigation }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  const handleAdd = () => {
    if(!name || !image || !description){
      Alert.alert('Error', 'Please fill all fields');
      return;
    }
    // Normally here we would save to backend or context
    Alert.alert('Success', 'Exercise added!');
    navigation.goBack();
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TextInput placeholder="Exercise Name" value={name} onChangeText={setName} style={{ borderWidth: 1, marginBottom: 10, padding: 8 }} />
      <TextInput placeholder="Image URL" value={image} onChangeText={setImage} style={{ borderWidth: 1, marginBottom: 10, padding: 8 }} />
      <TextInput placeholder="Description" value={description} onChangeText={setDescription} style={{ borderWidth: 1, marginBottom: 10, padding: 8 }} multiline />
      <Button title="Add Exercise" onPress={handleAdd} />
    </View>
  );
}
