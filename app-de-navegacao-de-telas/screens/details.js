import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

export default function Details({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes</Text>
      <Image 
        source={{ uri: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8&ixlib=rb-4.1.0&q=60&w=3000' }} 
        style={styles.image} 
      />

      <Text style={styles.text}>Este app tem foi criado para uma tafera de programação do curso téccnico de desenvolvimento de sistemas da ETEC de Itaquaquecetuba</Text>

      <Button 
        title="Sobre nós"
        onPress={() => navigation.navigate('About')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20, backgroundColor:"#100000"},
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, color:"white"},
  text: {fontSize: 18, marginBottom:15, color:"white"},
  image: { width: 300, height: 200, marginBottom: 20, borderRadius: 10 }
});