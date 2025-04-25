import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Title, Paragraph, Button, Card } from "react-native-paper";

export default function ReceitaScreen({ route, navigation }) {
  const { receita } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
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
    padding: 20, // Mais espaçamento
    backgroundColor: "#EDE7F6", // Fundo com tom roxo claro
  },
  title: {
    fontSize: 28, // Fonte maior
    fontWeight: "bold",
    color: "#1A1A1A", // Cor mais escura
    marginBottom: 20,
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.15)", // Sombra no texto
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  infoCard: {
    marginBottom: 20,
    borderRadius: 10, // Bordas mais arredondadas
    backgroundColor: "#FFFFFF",
    elevation: 4, // Sombra mais suave
    padding: 10,
  },
  infoText: {
    fontSize: 16,
    color: "#4A4A4A", // Cinza mais escuro
    marginVertical: 6,
  },
  sectionTitle: {
    fontSize: 22, // Fonte maior
    fontWeight: "600",
    color: "#6B4EFF", // Roxo elegante
    marginVertical: 15,
  },
  sectionCard: {
    marginBottom: 20,
    borderRadius: 10, // Bordas mais arredondadas
    backgroundColor: "#FFFFFF",
    elevation: 4, // Sombra mais suave
    padding: 10,
  },
  sectionText: {
    fontSize: 16,
    color: "#333333", // Cor alternada para legibilidade
    marginVertical: 6,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#6B4EFF", // Roxo elegante
    borderRadius: 10, // Bordas mais arredondadas
    elevation: 6, // Sombra mais pronunciada
  },
  buttonContent: {
    paddingVertical: 10, // Botão mais alto
  },
});
