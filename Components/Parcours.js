import React from "react";
import { View, StyleSheet } from "react-native";
import {
  Colors,
  Button,
  ProgressBar,
  Paragraph,
  useTheme,
} from "react-native-paper";

const Parcours = () => {
  const [progress, setProgress] = React.useState(20);

  const {
    colors: { background },
  } = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Paragraph>Réussite globale</Paragraph>
        <ProgressBar 
            progress={progress} 
            color={Colors.orange800} 
            style={{ height: 20 }}
        />
        <Button onPress={() => {}} style={styles.button}>
            Voir mes notes
          </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    backgroundColor: Colors.white,
    padding: 16,
    height: 50,
  },
  button: {
    margin: 4,
  },
});

export default Parcours;
