import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import {
  Button,
  Paragraph,
  useTheme,
  Card,
  Title,
  IconButton,
  Avatar,
} from "react-native-paper";
import Progression from "./Progression";

const Parcours = () => {
  const {
    colors: { background },
  } = useTheme();

  return (
    <ScrollView
      style={{ backgroundColor: background }}
      contentContainerStyle={styles.content}
    >
      <Progression />
      <Card style={styles.card}>
        <Card.Title
          title="Derniers résultats"
          left={(props) => <Avatar.Icon {...props} icon="file-document" />}
        />
        <Card.Content>
          <Paragraph>
            Dotted around the Hoenn region, you will find loamy soil, many of
            which are housing berries. Once you have picked the berries, then
            you have the ability to use that loamy soil to grow your own
            berries. These can be any berry and will require attention to get
            the best crop.
          </Paragraph>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Title
          title="Card Title"
          subtitle="Card Subtitle"
          left={(props) => <Avatar.Icon {...props} icon="folder" />}
        />
        <Card.Content>
          <Title>Card title</Title>
          <Paragraph>Card content</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    marginVertical: 10,
  },
  content: {
    padding: 4,
  },
  card: {
    margin: 4,
  },
});

export default Parcours;
