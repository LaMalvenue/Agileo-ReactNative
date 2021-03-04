import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import {
  Button,
  useTheme,
  Card,
  Colors,
  Avatar,
  List,
  Divider,
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
          <List.Section>
            <List.Item
              left={(props) => (
                <List.Icon
                  {...props}
                  icon="language-javascript"
                  color={Colors.yellow800}
                />
              )}
              title="12/20"
              right={(props) => <List.Icon {...props} icon="arrow-right" />}
            />
            <Divider />
            <List.Item
              left={(props) => (
                <List.Icon
                  {...props}
                  icon="language-javascript"
                  color={Colors.yellow800}
                />
              )}
              title="13.5/20"
              right={(props) => <List.Icon {...props} icon="arrow-right" />}
            />
            <Divider />
            <List.Item
              left={(props) => (
                <List.Icon
                  {...props}
                  icon="language-java"
                  color={Colors.red800}
                />
              )}
              title="16/20"
              right={(props) => <List.Icon {...props} icon="arrow-right" />}
            />
          </List.Section>
        </Card.Content>
        <Card.Actions>
          <Button onPress={() => {}}>Voir plus</Button>
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
