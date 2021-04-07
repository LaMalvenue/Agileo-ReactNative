import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { TabView, TabBar, SceneMap } from "react-native-tab-view";
import UserCourse from "../components/user/UserCourse";
import UserProfile from "../components/user/UserProfile";

const UserCourseRoute = () => <UserCourse style={[styles.scene]} />;
const UserProfileRoute = () => <UserProfile style={[styles.scene]} />;

const initialLayout = { width: Dimensions.get("window").width };

const UserRoute = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "userCourse", title: "Parcours" },
    { key: "userProfile", title: "Profil" },
  ]);

  const renderScene = SceneMap({
    userCourse: UserCourseRoute,
    userProfile: UserProfileRoute,
  });

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: "#92dedb" }}
      style={{ backgroundColor: "#0cada6" }}
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

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});

export default UserRoute;
