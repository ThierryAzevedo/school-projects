import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

export default function AboutUs({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre nós</Text>
      <Image 
        source={{ uri: 'https://media.istockphoto.com/id/1409637645/pt/vetorial/vector-illustration-of-choice-of-worker-or-personnel-recruitment-concept.jpg?s=1024x1024&w=is&k=20&c=rww5XU2A9AjEM821epg4OqebX9vtLSD78p5PHGVDlOY=' }} 
        style={styles.image} 
      />

      <Text style={styles.text}>Este app foi criado pelo aluno Thierry do segundo (2*) ds</Text>

      <Button 
        title="Ir para tela principal"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20, backgroundColor:"#afffff"},
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  text: {fontSize: 18, marginBottom:15},
  image: { width: 300, height: 200, marginBottom: 20, borderRadius: 10 }
});