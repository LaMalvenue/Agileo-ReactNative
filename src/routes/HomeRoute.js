import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import Home from "./../components/home/Home";
import AppNavigationTopHome from "../components/navigation/AppNavigationTopHome";

const HomeRoute = () => {
  return (
    <View>
      <AppNavigationTopHome style={styles.navigation} />
      <ScrollView>
        <Home />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  navigation: {
    position: "absolute",
  },
});

export default HomeRoute;
