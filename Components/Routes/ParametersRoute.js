import React from "react";
import { View, StyleSheet } from "react-native";
import { Colors, Card, Switch, Paragraph, useTheme } from "react-native-paper";

const ParametersRoute = () => {
  const { colors } = useTheme();

  const [showStatistics, setShowStatistics] = React.useState(false);
  const [showCustomColor, setShowCustomColor] = React.useState(false);
  const [showDarkMode, setShowDarkMode] = React.useState(false);

  return (
    <Card>
      <View style={styles.row}>
        <Paragraph>Afficher les statistiques</Paragraph>
        <Switch value={showStatistics} onValueChange={setShowStatistics} />
      </View>
      <View style={styles.row}>
        <Paragraph>Couleur personnalisée</Paragraph>
        <Switch value={showCustomColor} onValueChange={setShowCustomColor} />
      </View>
      <View style={styles.row}>
        <Paragraph>Mode sombre</Paragraph>
        <Switch value={showDarkMode} onValueChange={setShowDarkMode} />
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingVertical: 8,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  bottom: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
  fab: {
    position: "absolute",
    right: 16,
    bottom: 28,
  },
});

export default ParametersRoute;
