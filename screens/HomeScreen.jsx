import React from "react";
import { FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";

const receitas = [
  {
    id: 1,
    nome: "Feijoada",
    tempopreparo: "2 horas",
    porcoes: 6,
    ingredientes: [
      "1kg de feijão preto",
      "500g de carne",
      "300g de linguiça",
      "200g de costelinha",
      "2 laranjas",
      "200g de toucinho",
      "Arroz para acompanhar",
    ],
    modopreparo: [
      "1. Deixe o feijão de molho por 12 horas",
      "2. Cozinhe o feijão na panela de pressão",
      "3. Cozinhe o feijão na panela de pressão",
      "4. Cozinhe até ficar macio",
      "5. Sirva com arroz, couve e laranja",
    ],
  },
  {
    id: 2,
    nome: "Strogonoff de Frango",
    tempopreparo: "40 minutos",
    porcoes: 6,
    ingredientes: [
      "1kg de peito de frango",
      "2 caixas de creme de leite",
      "2 colheres de extrato de tomate",
      "2 colheres de extrato de tomate",
      "2 colheres de mostarda",
      "1 colher de mostarda",
      "Champignon a gosto",
      "Batata palha para acompanhar",
    ],
    modopreparo: [
      "1. Corte o frango em cubos",
      "2. Doure o frango na panela",
      "3. Adicione os molhos e o champignon",
      "4. Adicione o creme de leite",
      "5. Sirva com arroz e batata palha",
    ],
  },
];

export default function HomeScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("Receita", { receita: item })}
    >
      <Card style={styles.card} elevation={5}>
        <Card.Content>
          <Title style={styles.cardTitle}>{item.nome}</Title>
          <Paragraph style={styles.cardText}>
            Tempo de Preparo: {item.tempopreparo}
          </Paragraph>
          <Paragraph style={styles.cardText}>Porções: {item.porcoes}</Paragraph>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={receitas}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20, // Mais espaçamento
    backgroundColor: "#F1F3F6", // Fundo cinza claro
  },
  card: {
    marginBottom: 20,
    borderRadius: 12, // Bordas mais arredondadas
    backgroundColor: "#FFFFFF",
    padding: 12, // Padding interno maior
    borderWidth: 1, // Borda sutil
    borderColor: "#6B4EFF", // Borda roxa
    elevation: 5, // Sombra mais pronunciada
  },
  cardTitle: {
    fontSize: 22, // Fonte maior
    fontWeight: "bold",
    color: "#1A1A1A", // Cor mais escura
    marginBottom: 10,
    textShadowColor: "rgba(0, 0, 0, 0.1)", // Sombra no texto
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  cardText: {
    fontSize: 16,
    color: "#4A4A4A", // Cinza mais escuro
    marginVertical: 6, // Mais espaçamento
  },
});
