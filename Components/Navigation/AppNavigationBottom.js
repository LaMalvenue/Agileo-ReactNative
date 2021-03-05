import React from "react";
import { StyleSheet } from "react-native";
import { BottomNavigation, Colors } from "react-native-paper";
import HomeRoutes from "../Routes/HomeRoute";
import CoursesRoutes from "../Routes/CoursesRoute";
import CalendarRoutes from "../Routes/CalendarRoute";
import UserRoutes from "../Routes/UserRoute";
import MessagesRoutes from "../Routes/MessagesRoute";
import ParametersRoutes from "../Routes/ParametersRoute";

const HomeRoute = () => <HomeRoutes />;
const CoursesRoute = () => <CoursesRoutes />;
const CalendarRoute = () => <CalendarRoutes />;
const UserRoute = () => <UserRoutes />;
const MessagesRoute = () => <MessagesRoutes />;
const ParametersRoute = () => <ParametersRoutes />;

const AppNavigationBottom = ({ setTitle }) => {
  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    { key: "home", title: "Accueil", icon: "home" },
    { key: "courses", title: "Cours", icon: "school" },
    { key: "calendar", title: "Agenda", icon: "calendar" },
    { key: "messages", title: "Messages", icon: "comment-multiple" },
    { key: "parameters", title: "Paramètres", icon: "cog" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    courses: CoursesRoute,
    calendar: CalendarRoute,
    user: UserRoute,
    messages: MessagesRoute,
    parameters: ParametersRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={(i) => {
        setIndex(i);
      }}
      renderScene={renderScene}
      barStyle={{ backgroundColor: "#f7f7f7" }}
    />
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
  avatar: {
    margin: 8,
  },
});

export default AppNavigationBottom;
