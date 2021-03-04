import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { TabView, TabBar, SceneMap } from "react-native-tab-view";
import Profile from "../Profile";
import Parcours from "../Parcours";

const ProfilRoute = () => <Profile style={[styles.scene]} />;

const ParcoursRoute = () => <Parcours style={[styles.scene]} />;

const initialLayout = { width: Dimensions.get("window").width };

const ProfileRoute = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "profil", title: "Profil" },
    { key: "parcours", title: "Parcours" },
  ]);

  const renderScene = SceneMap({
    profil: ProfilRoute,
    parcours: ParcoursRoute,
  });

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: "orange" }}
      style={{ backgroundColor: "#694fad" }}
    />
  );

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
};

export default ProfileRoute;

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});
