import React from "react";
import color from 'color';
import { StyleSheet, Dimensions } from "react-native";
import { useTheme } from 'react-native-paper';
import { TabView, TabBar, SceneMap } from "react-native-tab-view";
import UserProfile from "../components/user/UserProfile";
import UserClassroom from "../components/user/UserClassroom";

const initialLayout = { width: Dimensions.get("window").width };

const UserProfileRoute = () => <UserProfile />;
const UserClassroomRoute = () => <UserClassroom />;

const UserScreen = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "userProfile", title: "Mon compte" },
    { key: "userClassroom", title: "Ma Promo" },
  ]);

  const theme = useTheme();

  const renderScene = SceneMap({
    userProfile: UserProfileRoute,
    userClassroom: UserClassroomRoute,
  });

  const tabBarColor = theme.dark
    ? (overlay(4, theme.colors.surface))
    : theme.colors.surface;

  const rippleColor = theme.dark
    ? color(tabBarColor).lighten(0.5)
    : color(tabBarColor).darken(0.2);

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: theme.colors.primary }}
      style={{ backgroundColor: tabBarColor, shadowColor: theme.colors.text }}
      labelStyle={{ color: theme.colors.primary }}
      pressColor={rippleColor}
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

export default UserScreen;
