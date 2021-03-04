import React from "react";
import { AppRegistry, View, StyleSheet, Dimensions } from "react-native";
import { Avatar, Text } from 'react-native-paper';
import { TabView, SceneMap } from "react-native-tab-view";
import { Profile } from "./Profile";
import { name as appName } from "./../app.json";

const FirstRoute = () => (
    <View style={[styles.scene]}> 
        <Text>Blabla</Text>
        <Avatar.Text size={24} label="LC" />
    </View>
);

const SecondRoute = () => (
  <View style={[styles.scene]} />
);

const initialLayout = { width: Dimensions.get("window").width };

export default function Slider() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "Modules" },
    { key: "second", title: "Profile" },
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  return (
    <TabView
      style={styles.tabs}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
}

const styles = StyleSheet.create({
  tabs: {
    backgroundColor: "#2AB1BF",
  },
  scene: {
    flex: 1,
  },
});

AppRegistry.registerComponent(appName, () => Slider);
