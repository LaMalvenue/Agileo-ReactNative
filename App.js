import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import AppNavigationBottom from "./Components/Navigation/AppNavigationBottom";
import { createStackNavigator } from "@react-navigation/stack";
import HomeRoute from "./Components/Routes/HomeRoute";
import UserRoute from "./Components/Routes/UserRoute";
import CoursesRoute from "./Components/Routes/CoursesRoute";
import CalendarRoute from "./Components/Routes/CalendarRoute";
import MessagesRoute from "./Components/Routes/MessagesRoute";
import ParametersRoute from "./Components/Routes/ParametersRoute";

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#0cada6",
    accent: "#92dedb",
  },
};

const App = () => {
  return (
    <NavigationContainer>
      <PaperProvider theme={theme}>
        {/* <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeRoute} />
          <Stack.Screen name="User" component={UserRoute} />
          <Stack.Screen name="Courses" component={CoursesRoute} />
          <Stack.Screen name="Calendar" component={CalendarRoute} />
          <Stack.Screen name="Messages" component={MessagesRoute} />
          <Stack.Screen name="Parameters" component={ParametersRoute} />
        </Stack.Navigator> */}
        <AppNavigationBottom />
      </PaperProvider>
    </NavigationContainer>
  );
};

export default App;
