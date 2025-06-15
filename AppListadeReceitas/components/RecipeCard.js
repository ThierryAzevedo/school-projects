import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function RecipeCard({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#2ecc71',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});
