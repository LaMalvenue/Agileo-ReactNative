import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { DefaultTheme, DarkTheme, Provider as PaperProvider } from "react-native-paper";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerContent from "./src/DrawerContent"

import Navigation from "./src/Navigation";

const Drawer = createDrawerNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#0cada6",
    accent: "#92dedb",
  },
};
const navigationTheme = theme.dark ? DarkTheme : theme;

const App = () => {
  return (
    <PaperProvider theme={navigationTheme}>
      <NavigationContainer>
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
          <Drawer.Screen name="Home" component={Navigation} />
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
