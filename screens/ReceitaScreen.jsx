import React from "react";
import { View, StyleSheet, ScrollView, Image } from "react-native";
import { Title, Paragraph, Button, Card } from "react-native-paper";

export default function ReceitaScreen({ route, navigation }) {
  const { receita } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{ uri: receita.imagem }}
        style={styles.recipeImage}
        resizeMode="cover"
      />
      <Title style={styles.title}>{receita.nome}</Title>
      <Card style={styles.infoCard}>
        <Card.Content>
          <Paragraph style={styles.infoText}>
            Tempo de Preparo: {receita.tempopreparo}
          </Paragraph>
          <Paragraph style={styles.infoText}>
            Porções: {receita.porcoes}
          </Paragraph>
        </Card.Content>
      </Card>

      <Title style={styles.sectionTitle}>Ingredientes</Title>
      <Card style={styles.sectionCard}>
        <Card.Content>
          {receita.ingredientes.map((ingrediente, index) => (
            <Paragraph key={index} style={styles.sectionText}>
              • {ingrediente}
            </Paragraph>
          ))}
        </Card.Content>
      </Card>

      <Title style={styles.sectionTitle}>Modo de Preparo</Title>
      <Card style={styles.sectionCard}>
        <Card.Content>
          {receita.modopreparo.map((passo, index) => (
            <Paragraph key={index} style={styles.sectionText}>
              {passo}
            </Paragraph>
          ))}
        </Card.Content>
      </Card>

      <Button
        mode="contained"
        onPress={() => navigation.goBack()}
        style={styles.button}
        contentStyle={styles.buttonContent}
      >
        Voltar
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#EDE7F6",
  },
  recipeImage: {
    width: "100%",
    height: 200,
    borderRadius: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#FF0000",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1A1A1A",
    marginBottom: 20,
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.15)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  infoCard: {
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    elevation: 4,
    padding: 10,
  },
  infoText: {
    fontSize: 16,
    color: "#4A4A4A",
    marginVertical: 6,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "600",
    color: "#6B4EFF",
    marginVertical: 15,
  },
  sectionCard: {
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    elevation: 4,
    padding: 10,
  },
  sectionText: {
    fontSize: 16,
    color: "#333333",
    marginVertical: 6,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#6B4EFF",
    borderRadius: 10,
    elevation: 6,
  },
  buttonContent: {
    paddingVertical: 10,
  },
});
