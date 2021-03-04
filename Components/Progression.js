import React from "react";
import { View, StyleSheet } from "react-native";
import {
  Colors,
  ProgressBar,
  Paragraph,
  useTheme,
  Card,
  Avatar,
  Button,
} from "react-native-paper";

const Progression = () => {
  const [progress, setProgress] = React.useState(0.7);
  const [courses, setCourses] = React.useState(0.35);
  const [exercices, setExercices] = React.useState(0.22);

  const {
    colors: { background },
  } = useTheme();

  return (
    <Card style={styles.card}>
      <Card.Title
        title="Progression"
        left={(props) => <Avatar.Icon {...props} icon="chart-line-variant" />}
      />
      <Card.Content>
        <View style={styles.row}>
          <Paragraph>Moyenne : 14.5/20</Paragraph>
        </View>
        <View style={styles.row}>
          <Paragraph>Réussite globale (70%)</Paragraph>
          <ProgressBar
            progress={progress}
            color={Colors.green400}
            style={{ backgroundColor: Colors.red400, height: 15 }}
          />
        </View>
        <View style={styles.row}>
          <Paragraph>Cours complétés (35%)</Paragraph>
          <ProgressBar
            progress={courses}
            color={Colors.orange800}
            style={{ height: 15 }}
          />
        </View>
        <View style={styles.row}>
          <Paragraph>Exercices terminés (22%)</Paragraph>
          <ProgressBar
            progress={exercices}
            color={Colors.orange800}
            style={{ height: 15 }}
          />
        </View>
      </Card.Content>
    </Card>
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

export default Progression;
