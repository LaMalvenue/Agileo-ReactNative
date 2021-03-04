import React from 'react';
import { AppRegistry, View, Text, Dimensions } from "react-native";
import { name as appName } from './../app.json';

export default function Profile() {
  return (
        <Text>Salut</Text>
  );
}

AppRegistry.registerComponent(appName, () => Profile);