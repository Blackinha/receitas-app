import React from "react";
import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  View,
} from "react-native";
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
    imagem:
      "https://alegrafoods.com.br/wp-content/uploads/2023/06/composicao-kit-feijoada-525x350.jpg", // Nova imagem de Feijoada
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
    imagem:
      "https://www.unileverfoodsolutions.com.br/dam/global-ufs/mcos/SLA/calcmenu/recipes/BR-recipes/chicken-&-other-poultry-dishes/strogonoff-de-frango/main-header.jpg", // Imagem do Strogonoff mantida
  },
];

export default function HomeScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("Receita", { receita: item })}
    >
      <Card style={styles.card} elevation={5}>
        <Card.Content style={styles.cardContent}>
          <Image
            source={{ uri: item.imagem }}
            style={styles.cardImage}
            resizeMode="cover"
          />
          <View style={styles.textContainer}>
            <Title style={styles.cardTitle}>{item.nome}</Title>
            <Paragraph style={styles.cardText}>
              Tempo de Preparo: {item.tempopreparo}
            </Paragraph>
            <Paragraph style={styles.cardText}>
              Porções: {item.porcoes}
            </Paragraph>
          </View>
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
    padding: 20,
    backgroundColor: "#F1F3F6",
  },
  card: {
    marginBottom: 20,
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    padding: 12,
    borderWidth: 1,
    borderColor: "#6B4EFF",
    elevation: 5,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
    borderWidth: 1,
    borderColor: "#FF0000",
  },
  textContainer: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1A1A1A",
    marginBottom: 10,
    textShadowColor: "rgba(0, 0, 0, 0.1)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  cardText: {
    fontSize: 16,
    color: "#4A4A4A",
    marginVertical: 6,
  },
});
