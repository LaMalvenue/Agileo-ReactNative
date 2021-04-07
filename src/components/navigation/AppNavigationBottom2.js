import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer, Colors } from "react-native-paper";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomeRoute from "../Routes/HomeRoute";
import CoursesRoute from "../Routes/CoursesRoute";
import CalendarRoute from "../Routes/CalendarRoute";
import UserRoute from "../Routes/UserRoute";
import MessagesRoute from "../Routes/MessagesRoute";
import ParametersRoute from "../Routes/ParametersRoute";

const Tab = createMaterialBottomTabNavigator();

const HomeScreen = () => <HomeRoute />;
const CoursesScreen = () => <CoursesRoute />;
const CalendarScreen = () => <CalendarRoute />;
const UserScreen = () => <UserRoute />;
const MessagesScreen = () => <MessagesRoute />;
const ParametersScreen = () => <ParametersRoute />;

const AppNavigationBottom = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            const icons = {
              Accueil: "home",
              Cours: "account",
            };

            return (
              <MaterialCommunityIcons
                name={icons[route.name]}
                color={color}
                size={size}
              />
            );
          },
        })}
      >
        <Tab.Screen name="Accueil" component={HomeScreen} />
        <Tab.Screen name="Cours" component={CoursesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
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
