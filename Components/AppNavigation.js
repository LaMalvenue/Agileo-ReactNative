import React from 'react';
import { Appbar } from 'react-native-paper';

export default function AppNavigation() {
  return (
    <Appbar.Header>
      <Appbar.Content title="Agileo" /> 
      <Appbar.Action icon="menu" onPress={() => {}} />
    </Appbar.Header>
  );
}
