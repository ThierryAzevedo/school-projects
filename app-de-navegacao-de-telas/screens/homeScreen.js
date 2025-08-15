import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Meu App!</Text>
      <Image 
        source={{ uri: 'https://st.hzcdn.com/simgs/97910d6b0407c3d1_14-0485/_.jpg' }} 
        style={styles.image} 
      />
      <Text style={styles.text}>Sintasse a vontade para analisar as outras páginas.</Text>

      <Button 
        title="Ir para Detalhes"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20, backgroundColor:"#F7BAA7" },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  text: {fontSize: 18, marginBottom:15},
  image: { width: 300, height: 200, marginBottom: 20, borderRadius: 10 }
});