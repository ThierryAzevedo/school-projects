import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Modal,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import RecipeCard from './components/RecipeCard'; // 👈 importa o componente

const data = [
  {
    id: '1',
    title: 'Bolo de Fubá',
    image: 'https://www.receiteria.com.br/wp-content/uploads/bolo-de-fuba-simples-730x548.jpeg',
    description: 'Um bolo de fubá simples e tradicional, perfeito para acompanhar um café.',
    ingredients: [
      '3 ovos',
      '2 xícaras de açúcar',
      '1 xícara de óleo',
      '2 xícaras de fubá',
      '1 xícara de farinha de trigo',
      '1 colher de sopa de fermento em pó',
      '1 xícara de leite'
    ],
    steps: [
      'Preaqueça o forno a 180°C.',
      'Bata os ovos, açúcar e óleo.',
      'Adicione o fubá, farinha e leite. Misture bem.',
      'Por último, adicione o fermento e misture suavemente.',
      'Despeje em forma untada e asse por 35–40 minutos.'
    ]
  },
  {
    id: '2',
    title: 'Mingau de Aveia',
    image: 'https://www.receiteria.com.br/wp-content/uploads/mingau-de-aveia-tradicional-730x548.jpeg',
    description: 'Receita nutritiva e rápida, ótima para o café da manhã ou lanche.',
    ingredients: [
      '1 xícara de leite',
      '3 colheres de sopa de aveia em flocos',
      '1 colher de sopa de açúcar (ou mel)',
      'Canela a gosto'
    ],
    steps: [
      'Misture todos os ingredientes em uma panela.',
      'Leve ao fogo médio, mexendo sempre.',
      'Cozinhe até engrossar (cerca de 5 minutos).',
      'Sirva quente, com canela por cima.'
    ]
  },
  {
    id: '3',
    title: 'Ovo Cozido',
    image: 'https://img.cybercook.com.br/imagens/receitas/102/ovo-cozido.jpeg',
    description: 'Simples, rápido e saudável.',
    ingredients: [
      '1 ou mais ovos',
      'Água',
      'Sal (opcional)'
    ],
    steps: [
      'Coloque os ovos em uma panela com água fria.',
      'Leve ao fogo e conte 8 a 10 minutos após ferver.',
      'Desligue o fogo, escorra a água e coloque os ovos na água fria.',
      'Descasque e sirva.'
    ]
  },
  {
    id: '4',
    title: 'Miojo (Macarrão Instantâneo)',
    image: 'https://s2-receitas.glbimg.com/Q7FvOmmXjYxRPvmX9FCClQzHkV4=/0x0:700x466/984x0/smart/filters:strip_icc()/s.glbimg.com/es/ge/f/original/2016/09/02/miojo.jpg',
    description: 'Macarrão instantâneo prático e saboroso.',
    ingredients: [
      '1 pacote de miojo',
      'Água para cozinhar',
      'Tempero do pacote ou a gosto'
    ],
    steps: [
      'Ferva 500 ml de água.',
      'Adicione o macarrão e cozinhe por 3 minutos.',
      'Escorra parcialmente ou completamente, dependendo da preferência.',
      'Misture o tempero e sirva.'
    ]
  }
];

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedItem(null);
  };

  const renderItem = ({ item }) => (
    <RecipeCard title={item.title} onPress={() => openModal(item)} />
  );

  return (
    <View style={styles.container}>
      <FlatList 
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <ScrollView style={{ width: '100%' }} showsVerticalScrollIndicator={false}>
              {selectedItem && (
                <>
                  <Image source={{ uri: selectedItem.image }} style={styles.image} />
                  <Text style={styles.modalTitle}>{selectedItem.title}</Text>
                  <Text style={styles.sectionTitle}>Descrição</Text>
                  <Text style={styles.text}>{selectedItem.description}</Text>

                  <Text style={styles.sectionTitle}>Ingredientes</Text>
                  {selectedItem.ingredients.map((ingredient, index) => (
                    <Text key={index} style={styles.text}>• {ingredient}</Text>
                  ))}

                  <Text style={styles.sectionTitle}>Modo de preparo</Text>
                  {selectedItem.steps.map((step, index) => (
                    <Text key={index} style={styles.text}>{index + 1}. {step}</Text>
                  ))}
                </>
              )}

              <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>Fechar</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    width: '90%',
    maxHeight: '85%',
    borderRadius: 10,
    padding: 20,
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    marginBottom: 15,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10,
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
  closeButton: {
    backgroundColor: '#e74c3c',
    padding: 12,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
